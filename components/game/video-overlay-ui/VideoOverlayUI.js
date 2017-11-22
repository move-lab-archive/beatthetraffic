import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TweenMax } from 'gsap'
import raf from 'raf'

import { scaleDetection, isInsideArea } from '../../../utils/resolution'

import { updateMasking } from '../masking/masking'

import detectMissedItemsThisFrame from './detectMissedItems'

import {
  addKilledItem,
  addMissedItem,
  collectItem
} from '../../../statemanagement/app/GameStateManagement'

import GameTempStateManager from '../../../statemanagement/app/GameTempStateManager'

import SoundsManager from '../../../statemanagement/app/SoundsManager'

class VideoOverlayUI extends Component {
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
        console.log('Start loop update canvas')
        this.isUpdatingCanvas = true
        this.loopUpdateCanvas()
      }
    }

    if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
      console.log('Level reset, need to clear up canvas')
      this.clearCanvas()
    }
  }

  componentDidMount () {
    // Preload image
    this.imgCarrot = new Image()
    this.imgCarrot.src = '/static/assets/icons/icon-carrot.svg'
    this.imgCarrot.width = 42
    this.imgCarrot.height = 41

    this.imgTree = new Image()
    this.imgTree.src = '/static/assets/icons/icon-tree.svg'
    this.imgTree.width = 39
    this.imgTree.height = 54

    this.imgBanana = new Image()
    this.imgBanana.src = '/static/assets/icons/icon-banana.svg'
    this.imgBanana.width = 29
    this.imgBanana.height = 45
  }

  drawRawDetections (context, detections) {
    context.strokeStyle = '#f00'
    context.lineWidth = 5
    context.font = '15px Arial'
    context.fillStyle = '#f00'
    detections.map(detection => {
      let scaledDetection = scaleDetection(
        detection,
        this.props.canvasResolution,
        this.props.originalResolution
      )
      let x = scaledDetection.x - scaledDetection.w / 2
      let y = scaledDetection.y - scaledDetection.h / 2
      context.strokeRect(x, y, scaledDetection.w, scaledDetection.h)
      context.fillText(scaledDetection.name, x, y - 10)
    })
  }

  drawObjectTrackerData (context, objectTrackerData) {
    context.globalAlpha = 1
    context.strokeStyle = 'blue'
    context.lineWidth = 5
    context.font = '30px Arial'
    context.fillStyle = 'blue'
    objectTrackerData.map(objectTracked => {
      let objectTrackedScaled = scaleDetection(
        objectTracked,
        this.props.canvasResolution,
        this.props.originalResolution
      )
      if (objectTrackedScaled.isZombie) {
        context.fillStyle = `rgba(255, 153, 0, ${
          objectTrackedScaled.zombieOpacity
        })`
        context.strokeStyle = `rgba(255, 153, 0, ${
          objectTrackedScaled.zombieOpacity
        })`
      } else {
        context.fillStyle = 'blue'
        context.strokeStyle = 'blue'
      }
      let x = objectTrackedScaled.x - objectTrackedScaled.w / 2
      let y = objectTrackedScaled.y - objectTrackedScaled.h / 2
      context.strokeRect(
        x + 5,
        y + 5,
        objectTrackedScaled.w - 10,
        objectTrackedScaled.h - 10
      )
      context.fillText(
        objectTrackedScaled.idDisplay,
        x + objectTrackedScaled.w / 2 - 20,
        y + objectTrackedScaled.h / 2
      )
    })
  }

  computeCircleRadius (bboxArea) {
    return Math.sqrt(bboxArea / 100)
  }

  computeCornerLength (bboxArea) {
    return Math.sqrt(bboxArea / 50)
  }

  drawTrackerUIData (context, objectTrackerDataForThisFrame) {
    objectTrackerDataForThisFrame
      .filter(objectTracked => {
        return (
          !GameTempStateManager.getItemsMasked().find(
            itemMasked => itemMasked.id === objectTracked.id
          ) && objectTracked.isZombie !== true
        )
      })
      .map(objectTracked => {
        let objectTrackedScaled = scaleDetection(
          objectTracked,
          this.props.canvasResolution,
          this.props.originalResolution
        )

        // Set params
        context.strokeStyle = '#4EFFFF'
        context.fillStyle = '#4EFFFF'
        context.lineWidth = 2
        context.globalAlpha = 1

        const bboxArea = objectTrackedScaled.w * objectTrackedScaled.h
        const canvasArea =
          this.props.canvasResolution.w * this.props.canvasResolution.h
        const bboxAreaPercentageOfCanvas = bboxArea * 100 / canvasArea

        // Draw circle with dynamic radius depending on Bbox size
        let bboxCenter = {
          x: objectTrackedScaled.x,
          y: objectTrackedScaled.y
        }

        // Clear react if there is a carrot of stuff
        // Maybe better to check when drawing
        context.clearRect(
          objectTrackedScaled.x - objectTrackedScaled.w / 2,
          objectTrackedScaled.y - objectTrackedScaled.h / 2,
          objectTrackedScaled.w,
          objectTrackedScaled.h
        )

        context.beginPath()
        context.arc(
          bboxCenter.x,
          bboxCenter.y,
          this.computeCircleRadius(bboxArea),
          0,
          2 * Math.PI,
          false
        )
        context.fill()

        // If bbox area is more than 0.8% of canvas area, display the target
        if (bboxAreaPercentageOfCanvas > 0.8) {
          // Shortcut to objectTrackedScaled to avoid writing 1000 lines of code
          const obj = objectTrackedScaled

          // Compute target corner relative size
          const cornerLength = this.computeCornerLength(bboxArea)
          const cornerTickness = cornerLength / 3

          // Draw target
          // Top right
          context.fillRect(
            obj.x + obj.w / 2,
            obj.y - obj.h / 2,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x + obj.w / 2 - cornerLength + cornerTickness,
            obj.y - obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Top left
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y - obj.h / 2,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y - obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Bottom left
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y + obj.h / 2 - cornerLength + cornerTickness,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y + obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Bottom right
          context.fillRect(
            obj.x + obj.w / 2,
            obj.y + obj.h / 2 - cornerLength + cornerTickness,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x + obj.w / 2 - cornerLength + cornerTickness,
            obj.y + obj.h / 2,
            cornerLength,
            cornerTickness
          )
        }
      })
  }

  collectItem (itemToCollect) {
    this.props.dispatch(collectItem(itemToCollect))
    TweenMax.to(itemToCollect, 1, {
      x: 0,
      y: 0,
      opacity: 0.1,
      onComplete: () => {
        GameTempStateManager.removeItemToCollect(itemToCollect.id)
      }
    })
  }

  drawCollectableItems () {
    GameTempStateManager.getItemsToCollect().forEach(item => {
      let img = this.imgTree
      if (item.type === 'carrot') {
        img = this.imgCarrot
      } else if (item.type === 'banana') {
        img = this.imgBanana
      }
      this.canvasContext.globalAlpha = item.opacity || 1
      // TODO need to scale object on the larger edge, for now height
      this.canvasContext.drawImage(
        img,
        item.x,
        item.y,
        Math.floor(item.h * img.width / img.height),
        item.h
      )
      this.canvasContext.globalAlpha = 1
    })
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, 1280, 720)
  }

  // Todo have min / max size
  getItemSize (mask) {
    const maskArea = mask.w * mask.h
    return Math.floor(Math.sqrt(maskArea / 7))
  }

  getItemType () {
    const types = ['carrot', 'banana', 'tree']
    return types[Math.floor(Math.random() * types.length)]
  }

  addCollectableItem (clickInfo, objectMaskedThatOutputObject) {
    const itemSize = this.getItemSize(objectMaskedThatOutputObject)

    const newItem = {
      type: this.getItemType(),
      x: clickInfo.xReal,
      y: clickInfo.yReal,
      w: itemSize,
      h: itemSize,
      id: objectMaskedThatOutputObject.id,
      isCollectable: false
    }

    // Wait a bit before making it collectable
    // if not people can just double click when
    // making the car disappear
    setTimeout(() => {
      newItem.isCollectable = true
    }, 500)

    GameTempStateManager.addCollectableItem(newItem)
  }

  loopUpdateCanvas () {
    if (this.lastFrameDrawn !== GameTempStateManager.getCurrentFrame()) {
      // Clear previous frame
      this.canvasContext.clearRect(0, 0, 1280, 720)

      // Get current frame of the tracker
      // (sometimes it can be diffrent from the video framerate)
      const frame =
        GameTempStateManager.getCurrentFrame() * this.props.ratioVideoTrackerFPS

      // Get data from tracker
      let objectTrackerDataForThisFrame = this.props.objectTrackerData[frame]

      // Update masks
      const remainingPotentialObjectToMask = updateMasking(
        objectTrackerDataForThisFrame,
        this.props.canvasResolution,
        this.props.originalResolution
      )

      // Handle user actions
      if (GameTempStateManager.getClicksBuffer().length > 0) {
        // For each click
        GameTempStateManager.getClicksBuffer().forEach(click => {
          // See if it will make a car dissapear with this click
          // for each remainingPotentialObjectToMask
          remainingPotentialObjectToMask.forEach(potentialObjectToMask => {
            if (isInsideArea(potentialObjectToMask, click)) {
              console.log(`${potentialObjectToMask.idDisplay} clicked !`)
              GameTempStateManager.addMaskedItem(potentialObjectToMask)
              // Output item to collect
              this.addCollectableItem(click, potentialObjectToMask)
              // Dispatch killed item notification
              this.props.dispatch(addKilledItem(potentialObjectToMask.id))
              // TODO Add puff animation
            }
          })

          // See if it can collect items
          // TODO collect only one item with one click
          GameTempStateManager.getItemsToCollect().forEach(itemToCollect => {
            if (
              itemToCollect.isCollectable &&
              isInsideArea(itemToCollect, click)
            ) {
              this.collectItem(itemToCollect)
            }
          })
        })
      }

      GameTempStateManager.resetClickBuffer()

      // Handle Items missed this frame
      const itemsMissedThisFrame = detectMissedItemsThisFrame(
        frame,
        this.props.objectTrackerData,
        this.props.allowedDisappearAreas,
        this.props.alreadyKilledItems
      )

      itemsMissedThisFrame.forEach(itemMissed => {
        console.log(`Frame ${frame}, ${itemMissed.idDisplay} missed:`)
        this.props.dispatch(addMissedItem())
      })

      /*
        Draw things for this frame
      */

      // Draw debug raw detections data
      let rawDetectionsForThisFrame = this.props.rawDetections[frame]
      if (this.props.showDebugUI && rawDetectionsForThisFrame) {
        this.drawRawDetections(this.canvasContext, rawDetectionsForThisFrame)
      }

      // Draw debug objectTracker data
      if (this.props.showDebugUI && objectTrackerDataForThisFrame) {
        this.drawObjectTrackerData(
          this.canvasContext,
          objectTrackerDataForThisFrame
        )
      }

      this.drawCollectableItems(this.canvasContext)

      // Draw tracker ui data
      if (objectTrackerDataForThisFrame) {
        this.drawTrackerUIData(
          this.canvasContext,
          objectTrackerDataForThisFrame
        )
      }

      this.lastFrameDrawn = GameTempStateManager.getCurrentFrame()
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
})(VideoOverlayUI)
