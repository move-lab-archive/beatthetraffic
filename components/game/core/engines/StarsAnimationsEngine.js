import { prefixURL } from "../../../../utils/url";

/* global Image */

class StarsAnimationsEngine {
  constructor() {
    this.offscreenCanvas = null
    this.sprite = {
      width: 900,
      height: 50,
      src: prefixURL('/static/assets/sprites/stars.png'),
      nbFrames: 18
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
    return this.sprite.nbFrames - 1
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

  drawFrameOnCanvas(contextToDrawOn, starsAnimation) {
    // Compute offscreenCanvas position of frame
    starsAnimation.dots.map(dot => {
      let sourceData = this.getFrameData(dot.currentFrame)
      contextToDrawOn.globalAlpha = dot.opacity
      contextToDrawOn.drawImage(
        this.offscreenCanvas,
        sourceData.x,
        sourceData.y,
        sourceData.width,
        sourceData.height,
        dot.x,
        dot.y,
        dot.width,
        dot.height
      )
    })
    contextToDrawOn.globalAlpha = 1
  }
}

const StarsAnimationsEngineInstance = new StarsAnimationsEngine()

export default StarsAnimationsEngineInstance
