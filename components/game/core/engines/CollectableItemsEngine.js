/* global Image */

const PATH_TO_ASSETS = '/static/assets/collectableitems'

function getSrc (collectableType) {
  return `${PATH_TO_ASSETS}/${collectableType}.png`
}

export const COLLECTABLE_TYPES = {
  BANANA: 'banana',
  TREE: 'tree'
}

class CollectableItemsEngine {
  constructor () {
    this.offscreenCanvas = {}
    this.sprites = {}

    this.sprites[COLLECTABLE_TYPES.BANANA] = {
      width: 920,
      height: 347,
      src: getSrc(COLLECTABLE_TYPES.BANANA),
      nbFramePerRow: 8,
      nbRow: 3,
      nbTotalFrame: 18
    }

    this.sprites[COLLECTABLE_TYPES.TREE] = {
      width: 920,
      height: 347,
      src: getSrc(COLLECTABLE_TYPES.TREE),
      nbFramePerRow: 8,
      nbRow: 3,
      nbTotalFrame: 18
    }
  }

  init () {
    Object.values(COLLECTABLE_TYPES).forEach(collectableType => {
      let sprite = this.sprites[collectableType]

      // Create image element and load sprite data
      let img = new Image()
      img.src = sprite.src

      img.onload = () => {
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
