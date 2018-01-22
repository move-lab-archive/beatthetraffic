/* global Image */
import { scaleDetection } from '../../../../utils/resolution'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

export const VEHICLE_REPLACEMENT_TYPES = {
  TREE: 'tree',
  RAINBOW: 'rainbow',
  UNICORN: 'unicorn'
}

class VehicleReplacementEngine {
  constructor () {
    this.offscreenCanvas = {}
    this.sprites = {}

    this.sprites[VEHICLE_REPLACEMENT_TYPES.TREE] = {
      width: 600,
      height: 600,
      src: '/static/assets/sprites/tree.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null
    }

    this.sprites[VEHICLE_REPLACEMENT_TYPES.UNICORN] = {
      width: 600,
      height: 600,
      src: '/static/assets/sprites/unicorn.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null
    }

    this.sprites[VEHICLE_REPLACEMENT_TYPES.RAINBOW] = {
      width: 600,
      height: 600,
      src: '/static/assets/sprites/rainbow.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null
    }
  }

  init () {

    Object.values(VEHICLE_REPLACEMENT_TYPES).forEach(vehicleReplacementType => {
      let sprite = this.sprites[vehicleReplacementType]

      // Create image element and load sprite data
      let img = new Image()
      img.src = sprite.src

      img.onload = () => {
        // Render sprites on offscreen canvas
        this.offscreenCanvas[vehicleReplacementType] = document.createElement('canvas')
        this.offscreenCanvas[vehicleReplacementType].width = sprite.width
        this.offscreenCanvas[vehicleReplacementType].height = sprite.height
        // this.offscreenCanvas[collectableType].img = img
        this.offscreenCanvas[vehicleReplacementType]
          .getContext('2d')
          .drawImage(img, 0, 0, sprite.width, sprite.height)

        // Compute frame data for sprite
        sprite.frameWidth = Math.floor(sprite.width / sprite.nbFramePerRow)
        sprite.frameHeight = Math.floor(sprite.height / sprite.nbRow)
      }
    })
  }

  getNbFrames(vehicleReplacementType) {
    return this.sprites[vehicleReplacementType].nbTotalFrame - 1
  }

  /* Associate bearing of the unicorn to a frame
                         dY

                       ^               XX
                       |             XXX
                       |            XX
                       |           XX
                       |         XX
                       |       XXX
                       |      XX
                       |     XX
                       |    XX    bearing of tracker = this angle in degree
                       |  XX
                       |XX
+----------------------XX----------------------->  dX
                       |
                       |
                       |     bearing of unicorn sprite = bearing of tracker + 90º
                       |
                       |
                       |
                       |
                       |
                       |
                       |
                       |
                       +

*/
  getFrameData (bearing, vehicleReplacementType) {
    let sprite = this.sprites[vehicleReplacementType]
    let bearingSprite = 0
    // translate bearing of tracker to bearing of sprite
    if (bearing < 270) {
      bearingSprite = bearing + 90
    } else {
      bearingSprite = bearing + 90 - 360
    }
    const frameNb = Math.round(bearingSprite * sprite.nbTotalFrame / 360)
    const rowNb = Math.floor(frameNb / sprite.nbFramePerRow)
    const columnNb = frameNb % sprite.nbFramePerRow
    return {
      x: columnNb * sprite.frameWidth,
      y: rowNb * sprite.frameHeight,
      width: sprite.frameWidth,
      height: sprite.frameHeight
    }
  }

  getVehicleReplacementSize (bbox, vehicleReplacementType) {
    let sprite = this.sprites[vehicleReplacementType]
    let vehicleReplacement = {}
    // Compute size depending on bbox area
    const bboxArea = bbox.w * bbox.h
    let size = Math.floor(Math.sqrt(bboxArea / 2))
    // TODO have this dynamic depending on canvas size / sprite image
    // between 30 and 50 pixel for  now
    size = Math.min(Math.max(parseInt(size), 90), 120)

    // keep proportions
    if (sprite.frameWidth > sprite.frameHeight) {
      vehicleReplacement.w = size
      vehicleReplacement.h = sprite.frameHeight * size / sprite.frameWidth
    } else {
      vehicleReplacement.w = sprite.frameWidth * size / sprite.frameHeight
      vehicleReplacement.h = size
    }

    return vehicleReplacement
  }

  drawFrameOnCanvas (contextToDrawOn, item) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(item.bearing, VEHICLE_REPLACEMENT_TYPES.TREE)
    contextToDrawOn.drawImage(
      this.offscreenCanvas[VEHICLE_REPLACEMENT_TYPES.TREE],
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

  drawVehiclesReplacementFromTrackerData (
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
        let objectScaled = scaleDetection(
          objectTracked,
          canvasResolution,
          originalResolution
        )

        objectScaled = {
          ...objectScaled,
          ...this.getVehicleReplacementSize(objectScaled, VEHICLE_REPLACEMENT_TYPES.TREE)
        }

        return objectScaled
      })

    unicornsToDrawThisFrame.forEach(vehicleReplacement => {
      this.drawFrameOnCanvas(context, vehicleReplacement)
    })
  }
}

const VehicleReplacementEngineInstance = new VehicleReplacementEngine()

export default VehicleReplacementEngineInstance
