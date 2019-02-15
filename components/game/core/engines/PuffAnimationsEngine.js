import { prefixURL } from "../../../../utils/url";

/* global Image */
const PERCENTAGE_SIZE_BBOX = 130 / 100
const MAX_PERCENTAGE_SIZE_CANVAS = 20 / 100
const MIN_PERCENTAGE_SIZE_CANVAS = 10 / 100

class PuffAnimationsEngine {
  constructor() {
    this.offscreenCanvas = null
    this.sprite = {
      src: prefixURL('/static/assets/puff/v1.png'),
      nbFrames: 4
    }
  }

  init(canvasResolution) {
    // Create image element and load sprite data
    let img = new Image()
    img.src = this.sprite.src

    this.canvasResolution = canvasResolution
    this.minItemSize = MIN_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h
    this.maxItemSize = MAX_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h

    this.sprite.height = this.maxItemSize
    this.sprite.width = this.maxItemSize * this.sprite.nbFrames

    img.onload = () => {
      // console.log(
      //   `Set up a ${this.sprite.width}x${
      //     this.sprite.height
      //   } offscreen canvas for Puff animation`
      // )
      // Render sprite on offscreen canvas
      this.offscreenCanvas = document.createElement('canvas')
      this.offscreenCanvas.width = this.sprite.width
      this.offscreenCanvas.height = this.sprite.height
      this.offscreenCanvas
        .getContext('2d')
        .drawImage(img, 0, 0, this.sprite.width, this.sprite.height)

      // Compute frame data for sprite
      this.sprite.frameWidth = Math.floor(
        this.sprite.width / this.sprite.nbFrames
      )
      this.sprite.frameHeight = Math.floor(this.sprite.height)
    }
  }

  getNbFrames() {
    return this.sprite.nbFrames
  }

  /* frame needs to start at 0 */
  getFrameData(frameNb) {
    return {
      x: frameNb * this.sprite.frameWidth,
      y: 0,
      width: this.sprite.frameWidth,
      height: this.sprite.frameHeight
    }
  }

  getItemSize(bbox) {
    let size = PERCENTAGE_SIZE_BBOX * Math.max(bbox.h, bbox.w)
    size = Math.max(Math.min(size, this.maxItemSize), this.minItemSize)

    return {
      w: size,
      h: size
    }
  }

  drawFrameOnCanvas(contextToDrawOn, puffAnimation) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(puffAnimation.currentFrame)
    contextToDrawOn.drawImage(
      this.offscreenCanvas,
      sourceData.x,
      sourceData.y,
      sourceData.width,
      sourceData.height,
      puffAnimation.x,
      puffAnimation.y,
      puffAnimation.w,
      puffAnimation.h
    )
  }
}

const PuffAnimationsEngineInstance = new PuffAnimationsEngine()

export default PuffAnimationsEngineInstance
