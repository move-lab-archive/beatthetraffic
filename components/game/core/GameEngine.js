import React, { Component } from 'react'
import { connect } from 'react-redux'
import raf from 'raf'

import { isInsideArea, scalePoint } from '../../../utils/resolution'

import { updateMasking } from '../masking/masking'

import detectMissedItemsThisFrame from './utils/detectMissedItems'

import CollectableItem from './models/CollectableItem'
import CollectableItemsEngine, {
  COLLECTABLE_TYPES
} from './engines/CollectableItemsEngine'

import MissedCarAnimationsEngine from './engines/MissedCarAnimationsEngine'
import MissedCarAnimation from './models/MissedCarAnimation'

import PuffAnimationsEngine from './engines/PuffAnimationsEngine'
import PuffAnimation from './models/PuffAnimation'

import StarsAnimationsEngine from './engines/StarsAnimationsEngine'
import StarsAnimation from './models/StarsAnimation'

import DebugTrackerEngine from './engines/DebugTrackerEngine'
import TrackerUIEngine from './engines/TrackerUIEngine'
import VehicleReplacementEngine from './engines/VehicleReplacementEngine'

import {
  addKilledItem,
  addMissedItem,
  collectItem,
  getSmokeLevel
} from '../../../statemanagement/app/GameStateManagement'

import { computeVisibleArea } from '../../../statemanagement/app/ViewportStateManagement'

import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'

class GameEngine extends Component {
  constructor (props) {
    super(props)
    this.lastFrameDrawn = -1
    this.loopUpdateCanvas = this.loopUpdateCanvas.bind(this)
    this.isUpdatingCanvas = false
  }

  componentWillReceiveProps (nextProps) {
    if (
      nextProps.isPlaying === true &&
      nextProps.introAnimPlayed === true &&
      nextProps.isObjectTrackerDataFetched === true
    ) {
      if (!this.isUpdatingCanvas) {
        // console.log('Start loop update canvas')
        this.isUpdatingCanvas = true
        this.loopUpdateCanvas()
      }
    }

    if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
      // console.log('Level reset, need to clear up canvas')
      this.clearCanvas()
    }
  }

  componentDidMount () {
    // Rendering engine that have offscreen canvas to init on client
    CollectableItemsEngine.init(this.props.canvasResolution)
    PuffAnimationsEngine.init(this.props.canvasResolution)
    StarsAnimationsEngine.init()
    VehicleReplacementEngine.init(this.props.canvasResolution)
    MissedCarAnimationsEngine.init()
  }

  collectItem (itemToCollect) {
    this.props.dispatch(collectItem(itemToCollect))
  }

  drawCollectableItems () {
    GameEngineStateManager.getItemsToCollect().forEach(collectableItem => {
      this.canvasContext.globalAlpha = collectableItem.opacity
      CollectableItemsEngine.drawFrameOnCanvas(
        this.canvasContext,
        collectableItem
      )
      this.canvasContext.globalAlpha = 1
    })
  }

  drawPuffAnimations () {
    GameEngineStateManager.getPuffAnimations().forEach(puffAnimation => {
      PuffAnimationsEngine.drawFrameOnCanvas(this.canvasContext, puffAnimation)
    })
  }

  drawMissedCarAnimations () {
    GameEngineStateManager.getMissedCarAnimations().forEach(missedCar => {
      MissedCarAnimationsEngine.drawFrameOnCanvas(this.canvasContext, missedCar)
    })
  }

  drawStarsAnimations () {
    GameEngineStateManager.getStarsAnimations().forEach(starAnimation => {
      StarsAnimationsEngine.drawFrameOnCanvas(this.canvasContext, starAnimation)
      // CollectableItemsEngine.drawStarsAnimationsFrameOnCanvas(
      //   this.canvasContext,
      //   starAnimation
      // )
    })
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, this.props.canvasResolution.w, this.props.canvasResolution.h)
  }

  addCollectableItem (clickInfo, objectMaskedThatOutputObject, type) {
    const size = CollectableItemsEngine.getItemSize(objectMaskedThatOutputObject, type)
    const itemType = type

    const newItem = new CollectableItem(
      itemType,
      clickInfo.x - size.w,
      clickInfo.y - size.h,
      size.w,
      size.h,
      1,
      objectMaskedThatOutputObject.id
    )

    GameEngineStateManager.addCollectableItem(newItem)
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getWhatToOutputFromDisappearingACar () {
    // Depending on smoke level, decide wheter we output heath helper or points, or nothing
    let output = null

    if (this.props.smokeLevel < 50) {
      // Probability: 50% nothing, 50% cherry/carrot/banana
      output = Math.random() < 0.5 ? 'random-item-win-point' : null
      if (output === 'random-item-win-point') {
        output = this.getRandomInt(0, 2)
        if (output === 0) {
          output = COLLECTABLE_TYPES.BANANA
        } else if (output === 1) {
          output = COLLECTABLE_TYPES.CARROT
        } else {
          output = COLLECTABLE_TYPES.CHERRY
        }
      }
    } else if (this.props.smokeLevel >= 50 && this.props.smokeLevel < 80) {
      // Output banaanas / carrot or healing kit
      output =
        Math.random() < 0.5
          ? 'random-item-win-point'
          : COLLECTABLE_TYPES.HEALING
      if (output === 'random-item-win-point') {
        output = this.getRandomInt(0, 2)
        if (output === 0) {
          output = COLLECTABLE_TYPES.BANANA
        } else if (output === 1) {
          output = COLLECTABLE_TYPES.CARROT
        } else {
          output = COLLECTABLE_TYPES.CHERRY
        }
      }
    } else {
      // Output only healable kits
      output = COLLECTABLE_TYPES.HEALING
    }

    return output
  }

  loopUpdateCanvas () {
    if (this.lastFrameDrawn !== GameEngineStateManager.getCurrentFrame()) {
      // Clear previous frame
      this.canvasContext.clearRect(0, 0, this.props.canvasResolution.w, this.props.canvasResolution.h)

      // Get current frame of the tracker
      // (sometimes it can be diffrent from the video framerate)
      const frame =
        GameEngineStateManager.getCurrentFrame() *
        this.props.ratioVideoTrackerFPS

      // Get data from tracker
      let objectTrackerDataForThisFrame = this.props.objectTrackerData[frame]

      // Update masks
      const remainingPotentialObjectToMask = updateMasking(
        objectTrackerDataForThisFrame,
        this.props.canvasResolution,
        this.props.originalResolution
      )

      // Handle user actions
      if (GameEngineStateManager.getClicksBuffer().length > 0) {
        let clickUsed = false
        // For each click
        GameEngineStateManager.getClicksBuffer().forEach(click => {
          // See if it will make a car dissapear with this click
          // for each remainingPotentialObjectToMask
          remainingPotentialObjectToMask.every(potentialObjectToMask => {
            if (isInsideArea(potentialObjectToMask, click)) {
              // console.log(`${potentialObjectToMask.idDisplay} clicked !`)
              const whatObjectToOutput = this.getWhatToOutputFromDisappearingACar()

              if (whatObjectToOutput) {
                // Output item to collect
                this.addCollectableItem(
                  click,
                  potentialObjectToMask,
                  whatObjectToOutput
                )
              }

              GameEngineStateManager.addMaskedItem(potentialObjectToMask)
              // Dispatch killed item notification
              this.props.dispatch(
                addKilledItem(potentialObjectToMask.id, whatObjectToOutput)
              )

              const puffAnimationSize = PuffAnimationsEngine.getItemSize(potentialObjectToMask)

              // Add puff animation
              GameEngineStateManager.addPuffAnimation(
                new PuffAnimation(
                  click.x,
                  click.y,
                  puffAnimationSize.w,
                  puffAnimationSize.h,
                  potentialObjectToMask.id
                )
              )

              // break from loop
              clickUsed = true
              return false
            } else {
              return true
            }
          })

          // See if it can collect items, is click wasn't used to disappear a car
          if (!clickUsed) {
            GameEngineStateManager.getItemsToCollect().every(itemToCollect => {
              if (
                itemToCollect.isCollectable &&
                isInsideArea(itemToCollect, click)
              ) {
                this.collectItem(itemToCollect)

                // Add explosion animation
                GameEngineStateManager.addStarsAnimation(
                  new StarsAnimation(click.x, click.y, itemToCollect.id)
                )

                // break from loop
                clickUsed = true
                return false
              } else {
                return true
              }
            })
          }

          // reset click used
          clickUsed = false
        })
      }

      GameEngineStateManager.resetClickBuffer()

      // Handle Items missed this frame
      const itemsMissedThisFrame = detectMissedItemsThisFrame(
        frame,
        this.props.objectTrackerData,
        this.props.allowedDisappearAreas,
        this.props.alreadyKilledItems,
        computeVisibleArea(this.props.originalResolution)
      )

      itemsMissedThisFrame.forEach(itemMissed => {
        // console.log(`Frame ${frame}, ${itemMissed.idDisplay} missed:`)
        this.props.dispatch(addMissedItem())
        const centerOfDisappearItem = scalePoint(
          itemMissed.disappearingHint,
          this.props.canvasResolution,
          this.props.originalResolution
        )

        // Add a visual clue that we have missed them
        GameEngineStateManager.addMissedCarAnimation(
          new MissedCarAnimation(
            centerOfDisappearItem.x,
            centerOfDisappearItem.y,
            TrackerUIEngine.computeCircleRadius(itemMissed.w * itemMissed.h) * 4,
            itemMissed.id
          )
        )
      })

      /*
        Draw things for this frame
      */

      // Draw collectable items state
      this.drawCollectableItems(this.canvasContext)

      // Draw start animations
      this.drawStarsAnimations(this.canvasContext)

      // Draw puff animations
      this.drawPuffAnimations(this.canvasContext)

      if (objectTrackerDataForThisFrame) {
        // Draw unicorns
        VehicleReplacementEngine.drawVehiclesReplacementFromTrackerData(
          this.canvasContext,
          objectTrackerDataForThisFrame,
          this.props.canvasResolution,
          this.props.originalResolution
        )
      }

      // Draw tracker ui data
      if (objectTrackerDataForThisFrame) {
        TrackerUIEngine.drawTrackerUIData(
          this.canvasContext,
          objectTrackerDataForThisFrame,
          this.props.canvasResolution,
          this.props.originalResolution
        )
      }

      // Draw missed car animations on top of trackerui
      this.drawMissedCarAnimations(this.canvasContext)

      // Draw debug raw detections data
      let rawDetectionsForThisFrame = this.props.rawDetections[frame]
      if (this.props.showDebugUI && rawDetectionsForThisFrame) {
        DebugTrackerEngine.drawRawDetections(
          this.canvasContext,
          rawDetectionsForThisFrame,
          this.props.canvasResolution,
          this.props.originalResolution
        )
      }

      // Draw debug objectTracker data
      if (this.props.showDebugUI && objectTrackerDataForThisFrame) {
        DebugTrackerEngine.drawObjectTrackerData(
          this.canvasContext,
          objectTrackerDataForThisFrame,
          this.props.canvasResolution,
          this.props.originalResolution
        )
      }

      this.lastFrameDrawn = GameEngineStateManager.getCurrentFrame()
    }
    raf(this.loopUpdateCanvas.bind(this))
  }

  render () {
    return (
      <div className={`canvas-container`}>
        {/* Canvas width and height must
        be set the the yolo detections resolution
        Then it is scaled down to viewport */}
        <canvas
          ref={el => {
            this.canvasEl = el
            if (this.canvasEl) {
              this.canvasContext = el.getContext('2d')
            }
          }}
          width={this.props.canvasResolution.w}
          height={this.props.canvasResolution.h}
          className='canvas'
        />
        <style jsx>{`
          .canvas-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
          }
          .canvas {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }

          @media (min-aspect-ratio: 16/9) {
            .canvas {
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .canvas {
              width: auto;
              height: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  const selectedVideo = state.app.get('availableVideos').find(video => {
    return video.get('name') === state.app.get('selectedVideo')
  })

  const ratioVideoTrackerFPS =
    selectedVideo.get('trackerAndDetectionsFPS') / selectedVideo.get('videoFPS')

  return {
    rawDetections: state.rawDetections.get('data'),
    areRawDetectionsFetched: state.rawDetections.get('fetched'),
    objectTrackerData: state.objectTracker.get('data'),
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    showDebugUI: state.settings.get('showDebugUI'),
    originalResolution: selectedVideo.get('originalResolution').toJS(),
    canvasResolution: state.viewport.get('canvasResolution').toJS(),
    ratioVideoTrackerFPS,
    allowedDisappearAreas: selectedVideo.get('disappearAreas').toJS(),
    alreadyKilledItems: state.game.get('killedItems'),
    smokeLevel: getSmokeLevel(
      state.game.get('nbItemsMissed'),
      state.game.get('maxMissed')
    ),
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(GameEngine)
