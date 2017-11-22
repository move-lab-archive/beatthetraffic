/* global Image */

class PuffAnimationsEngine {
  constructor () {
    this.offscreenCanvas = null
    this.sprite = {
      width: 500,
      height: 100,
      src: '/static/assets/puff/puff-smoke.svg',
      nbFrames: 5
    }
  }

  init () {
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

  getNbFrames () {
    return this.sprite.nbFrames
  }

  /* frame needs to start at 0 */
  getFrameData (frameNb) {
    return {
      x: frameNb * this.sprite.frameWidth,
      y: 0,
      width: this.sprite.frameWidth,
      height: this.sprite.frameHeight
    }
  }

  drawFrameOnCanvas (contextToDrawOn, puffAnimation) {
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
