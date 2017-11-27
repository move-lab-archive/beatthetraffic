import React, { Component } from 'react'
import { connect } from 'react-redux'
import raf from 'raf'

import { isInsideArea } from '../../../utils/resolution'

import { updateMasking } from '../masking/masking'

import detectMissedItemsThisFrame from './utils/detectMissedItems'

import CollectableItem from './models/CollectableItem'
import CollectableItemsEngine, {
  COLLECTABLE_TYPES
} from './engines/CollectableItemsEngine'

import PuffAnimationsEngine from './engines/PuffAnimationsEngine'
import PuffAnimation from './models/PuffAnimation'

import StarsAnimationsEngine from './engines/StarsAnimationsEngine'
import StarsAnimation from './models/StarsAnimation'

import DebugTrackerEngine from './engines/DebugTrackerEngine'
import TrackerUIEngine from './engines/TrackerUIEngine'

import {
  addKilledItem,
  addMissedItem,
  collectItem
} from '../../../statemanagement/app/GameStateManagement'

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
    CollectableItemsEngine.init()
    PuffAnimationsEngine.init()
    StarsAnimationsEngine.init()
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
    this.canvasContext.clearRect(0, 0, 1280, 720)
  }

  getItemSize (mask) {
    // Compute size depending on bbox area
    const maskArea = mask.w * mask.h
    let size = Math.floor(Math.sqrt(maskArea / 4))
    // TODO have this dynamic depending on canvas size / sprite image
    // between 30 and 50 pixel for  now
    size = Math.min(Math.max(parseInt(size), 30), 50)
    return size
  }

  getItemType () {
    // TODO add logic depending on game situation
    const types = Object.values(COLLECTABLE_TYPES)
    return types[Math.floor(Math.random() * types.length)]
  }

  addCollectableItem (clickInfo, objectMaskedThatOutputObject) {
    const itemSize = this.getItemSize(objectMaskedThatOutputObject)
    const itemType = this.getItemType()

    const size = {
      w: itemSize,
      h: itemSize
    }

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

  loopUpdateCanvas () {
    if (this.lastFrameDrawn !== GameEngineStateManager.getCurrentFrame()) {
      // Clear previous frame
      this.canvasContext.clearRect(0, 0, 1280, 720)

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
              GameEngineStateManager.addMaskedItem(potentialObjectToMask)
              // Output item to collect
              this.addCollectableItem(click, potentialObjectToMask)
              // Dispatch killed item notification
              this.props.dispatch(addKilledItem(potentialObjectToMask.id))
              // Add puff animation
              GameEngineStateManager.addPuffAnimation(
                new PuffAnimation(
                  click.x,
                  click.y,
                  90,
                  potentialObjectToMask.id
                )
              )
              // Add explosion animation
              GameEngineStateManager.addStarsAnimation(
                new StarsAnimation(click.x, click.y, potentialObjectToMask.id)
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
        this.props.alreadyKilledItems
      )

      itemsMissedThisFrame.forEach(itemMissed => {
        // console.log(`Frame ${frame}, ${itemMissed.idDisplay} missed:`)
        this.props.dispatch(addMissedItem())
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

      // Draw tracker ui data
      if (objectTrackerDataForThisFrame) {
        TrackerUIEngine.drawTrackerUIData(
          this.canvasContext,
          objectTrackerDataForThisFrame,
          this.props.canvasResolution,
          this.props.originalResolution
        )
      }

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
          width='1280'
          height='720'
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
            user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
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
    alreadyKilledItems: state.game.get('killedItems')
  }
})(GameEngine)
