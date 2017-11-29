/* global Image */
import { scaleDetection } from '../../../../utils/resolution'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

class UnicornEngine {
  constructor () {
    this.offscreenCanvas = null

    this.sprite = {
      width: 920,
      height: 347,
      src: '/static/assets/sprites/unicorn.png',
      nbFramePerRow: 8,
      nbRow: 3,
      nbTotalFrame: 18
    }
  }

  init () {
    // Create image element and load sprite data
    let img = new Image()
    img.src = this.sprite.src

    img.onload = () => {
      // Render sprites on offscreen canvas
      this.offscreenCanvas = document.createElement('canvas')
      this.offscreenCanvas.width = this.sprite.width
      this.offscreenCanvas.height = this.sprite.height
      // this.offscreenCanvas[collectableType].img = img
      this.offscreenCanvas
        .getContext('2d')
        .drawImage(img, 0, 0, this.sprite.width, this.sprite.height)

      // Compute frame data for sprite
      this.sprite.frameWidth = Math.floor(
        this.sprite.width / this.sprite.nbFramePerRow
      )
      this.sprite.frameHeight = Math.floor(
        this.sprite.height / this.sprite.nbRow
      )
    }
  }

  getNbFrames () {
    return this.sprites.nbTotalFrame - 1
  }

  /* frame needs to start at 0 */
  getFrameData (bearing) {
    const frameNb = 0
    let sprite = this.sprite
    const rowNb = Math.floor(frameNb / sprite.nbFramePerRow)
    const columnNb = frameNb % sprite.nbFramePerRow
    return {
      x: columnNb * sprite.frameWidth,
      y: rowNb * sprite.frameHeight,
      width: sprite.frameWidth,
      height: sprite.frameHeight
    }
  }

  getUnicornSize (mask) {
    // Compute size depending on bbox area
    const maskArea = mask.w * mask.h
    let size = Math.floor(Math.sqrt(maskArea / 4))
    // TODO have this dynamic depending on canvas size / sprite image
    // between 30 and 50 pixel for  now
    size = Math.min(Math.max(parseInt(size), 30), 50)
    return size
  }

  drawFrameOnCanvas (contextToDrawOn, item) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(item.bearing)
    contextToDrawOn.drawImage(
      this.offscreenCanvas,
      sourceData.x,
      sourceData.y,
      sourceData.width,
      sourceData.height,
      item.x - item.w / 2,
      item.y - item.h / 2,
      item.w,
      item.h
    )
  }

  drawUnicornsFromTrackerData (
    context,
    objectTrackerDataForThisFrame,
    canvasResolution,
    originalResolution
  ) {
    const unicornsToDrawThisFrame = objectTrackerDataForThisFrame
      .filter(objectTracked => {
        return (
          GameEngineStateManager.getItemsMasked().find(
            itemMasked => itemMasked.id === objectTracked.id
          ) && objectTracked.isZombie !== true
        )
      })
      .map(objectTracked => {
        // TODO Here getUnicornSize to draw it

        return scaleDetection(
          objectTracked,
          canvasResolution,
          originalResolution
        )
      })

    unicornsToDrawThisFrame.forEach(unicorn => {
      this.drawFrameOnCanvas(context, unicorn)
    })
  }
}

const UnicornEngineInstance = new UnicornEngine()

export default UnicornEngineInstance
