/* global Image */

const PATH_TO_ASSETS = '/static/assets/sprites'

function getSrc (collectableType) {
  return `${PATH_TO_ASSETS}/${collectableType}.png`
}

export const COLLECTABLE_TYPES = {
  BANANA: 'banana',
  HEALING: 'healing',
  CARROT: 'carrot',
  CHERRY: 'cherry'
}

const PERCENTAGE_SIZE_BBOX = 50 / 100
const MAX_PERCENTAGE_SIZE_CANVAS = 10 / 100
const MIN_PERCENTAGE_SIZE_CANVAS = 7 / 100

class CollectableItemsEngine {
  constructor () {
    this.offscreenCanvas = {}
    this.sprites = {}

    this.sprites[COLLECTABLE_TYPES.BANANA] = {
      ratioWidthHeight: 0.8,
      src: getSrc(COLLECTABLE_TYPES.BANANA),
      nbFramePerRow: 4,
      nbRow: 5,
      nbTotalFrame: 18,
      scaleFactor: 1,
      frameWidth: null,
      frameHeight: null
    }

    this.sprites[COLLECTABLE_TYPES.HEALING] = {
      ratioWidthHeight: 0.8,
      src: getSrc(COLLECTABLE_TYPES.HEALING),
      nbFramePerRow: 4,
      nbRow: 5,
      nbTotalFrame: 18,
      scaleFactor: 1,
      frameWidth: null,
      frameHeight: null
    }

    this.sprites[COLLECTABLE_TYPES.CARROT] = {
      ratioWidthHeight: 0.8,
      src: getSrc(COLLECTABLE_TYPES.CARROT),
      nbFramePerRow: 4,
      nbRow: 5,
      nbTotalFrame: 18,
      scaleFactor: 1,
      frameWidth: null,
      frameHeight: null
    }

    this.sprites[COLLECTABLE_TYPES.CHERRY] = {
      ratioWidthHeight: 0.8,
      src: getSrc(COLLECTABLE_TYPES.CHERRY),
      nbFramePerRow: 4,
      nbRow: 5,
      nbTotalFrame: 18,
      scaleFactor: 1,
      frameWidth: null,
      frameHeight: null
    }
  }

  init (canvasResolution) {
    // From canvasResolution compute the sprite size needed
    this.canvasResolution = canvasResolution
    this.minItemSize = MIN_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h
    this.maxItemSize = MAX_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h

    Object.values(COLLECTABLE_TYPES).forEach(collectableType => {
      let sprite = this.sprites[collectableType]

      // Compute sprite width / height to draw to offscreen canvas
      sprite.height = sprite.nbRow * this.maxItemSize
      sprite.width = sprite.height * sprite.ratioWidthHeight

      // Create image element and load sprite data
      let img = new Image()
      img.src = sprite.src

      img.onload = () => {
        // console.log(
        //   `Set up a ${sprite.width}x${
        //     sprite.height
        //   } offscreen canvas for ${collectableType}`
        // )

        // Render sprites on offscreen canvas
        this.offscreenCanvas[collectableType] = document.createElement('canvas')
        this.offscreenCanvas[collectableType].width = sprite.width
        this.offscreenCanvas[collectableType].height = sprite.height
        // this.offscreenCanvas[collectableType].img = img
        this.offscreenCanvas[collectableType]
          .getContext('2d')
          .drawImage(img, 0, 0, sprite.width, sprite.height)

        // Compute frame data for sprite
        sprite.frameWidth = Math.floor(sprite.width / sprite.nbFramePerRow)
        sprite.frameHeight = Math.floor(sprite.height / sprite.nbRow)
      }
    })
  }

  getNbFrames (collectableType) {
    return this.sprites[collectableType].nbTotalFrame - 1
  }

  /* frame needs to start at 0 */
  getFrameData (frameNb, collectableType) {
    let sprite = this.sprites[collectableType]
    const rowNb = Math.floor(frameNb / sprite.nbFramePerRow)
    const columnNb = frameNb % sprite.nbFramePerRow
    return {
      x: columnNb * sprite.frameWidth,
      y: rowNb * sprite.frameHeight,
      width: sprite.frameWidth,
      height: sprite.frameHeight
    }
  }

  getItemSize (bbox, type) {
    let sprite = this.sprites[type]
    let item = {}
    // Compute size depending on bbox height
    let size = PERCENTAGE_SIZE_BBOX * bbox.h * sprite.scaleFactor

    // Constraint between min and max
    size = Math.max(Math.min(size, this.maxItemSize), this.minItemSize)

    // keep proportions
    if (sprite.frameWidth > sprite.frameHeight) {
      item.w = size
      item.h = sprite.frameHeight * size / sprite.frameWidth
    } else {
      item.w = sprite.frameWidth * size / sprite.frameHeight
      item.h = size
    }

    return item
  }

  drawFrameOnCanvas (contextToDrawOn, item) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(item.currentFrame, item.type)
    contextToDrawOn.drawImage(
      this.offscreenCanvas[item.type],
      sourceData.x,
      sourceData.y,
      sourceData.width,
      sourceData.height,
      item.x,
      item.y,
      item.w,
      item.h
    )
  }
}

const CollectableItemsEngineInstance = new CollectableItemsEngine()

export default CollectableItemsEngineInstance
