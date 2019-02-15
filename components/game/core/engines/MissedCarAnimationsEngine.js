import { prefixURL } from "../../../../utils/url";

/* global Image */

class MissedCarAnimationsEngine {
  constructor() {
    this.offscreenCanvas = null
    this.sprite = {
      width: 800,
      height: 200,
      src: prefixURL('/static/assets/sprites/missedcar.png'),
      nbFrames: 4
    }
  }

  init() {
    // Create image element and load sprite data
    let img = new Image()
    img.src = this.sprite.src

    img.onload = () => {
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

  drawFrameOnCanvas(contextToDrawOn, missedCarAnimation) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(missedCarAnimation.currentFrame)
    contextToDrawOn.drawImage(
      this.offscreenCanvas,
      sourceData.x,
      sourceData.y,
      sourceData.width,
      sourceData.height,
      missedCarAnimation.x,
      missedCarAnimation.y,
      missedCarAnimation.w,
      missedCarAnimation.h
    )
  }
}

const MissedCarAnimationsEngineInstance = new MissedCarAnimationsEngine()

export default MissedCarAnimationsEngineInstance
