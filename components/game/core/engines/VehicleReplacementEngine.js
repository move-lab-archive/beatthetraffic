/* global Image */
import { scaleDetection } from '../../../../utils/resolution'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

export const VEHICLE_REPLACEMENT_TYPES = {
  TREE: 'tree',
  RAINBOW: 'rainbow',
  UNICORN: 'unicorn'
}

const PERCENTAGE_SIZE_BBOX = 80 / 100
const MAX_PERCENTAGE_SIZE_CANVAS = 16 / 100
const MIN_PERCENTAGE_SIZE_CANVAS = 6 / 100

class VehicleReplacementEngine {
  constructor () {
    this.offscreenCanvas = {}
    this.sprites = {}
    this.canvasResolution = {}

    // Keep track of object id -> Vehicle type
    this.mapVehicleTypes = {}

    this.sprites[VEHICLE_REPLACEMENT_TYPES.TREE] = {
      ratioWidthHeight: 1,
      src: '/static/assets/sprites/tree.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null,
      scaleFactor: 0.9 // Make rolling tree a bit smaller
    }

    this.sprites[VEHICLE_REPLACEMENT_TYPES.UNICORN] = {
      ratioWidthHeight: 1,
      src: '/static/assets/sprites/unicorn.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null,
      scaleFactor: 1
    }

    this.sprites[VEHICLE_REPLACEMENT_TYPES.RAINBOW] = {
      ratioWidthHeight: 1,
      src: '/static/assets/sprites/rainbow.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null,
      scaleFactor: 1
    }
  }

  init (canvasResolution) {
    // From canvasResolution compute the sprite size needed
    this.canvasResolution = canvasResolution
    this.minItemSize = MIN_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h
    this.maxItemSize = MAX_PERCENTAGE_SIZE_CANVAS * this.canvasResolution.h

    Object.values(VEHICLE_REPLACEMENT_TYPES).forEach(vehicleReplacementType => {
      let sprite = this.sprites[vehicleReplacementType]

      // Compute sprite width / height to draw to offscreen canvas
      sprite.height = sprite.nbRow * this.maxItemSize
      sprite.width = sprite.height * sprite.ratioWidthHeight

      // TODO: Do we want to load a diff png depending on pixel density ?
      // let maxAssetSize = window.devicePixelRatio * this.spriteHeight

      // Create image element and load sprite data
      let img = new Image()
      img.src = sprite.src

      img.onload = () => {
        console.log(
          `Set up a ${sprite.width}x${
            sprite.height
          } offscreen canvas for ${vehicleReplacementType}`
        )

        // Render sprites on offscreen canvas
        this.offscreenCanvas[vehicleReplacementType] = document.createElement(
          'canvas'
        )
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

  getNbFrames (vehicleReplacementType) {
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

  getVehicleReplacementSize (object) {
    let sprite = this.sprites[object.type]
    let vehicleReplacement = {}

    // Compute size depending on bbox height
    let size = PERCENTAGE_SIZE_BBOX * object.h * sprite.scaleFactor

    // Constraint between min and max
    size = Math.max(Math.min(size, this.maxItemSize), this.minItemSize)

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

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getVehicleReplacementType (objectId) {
    let vehicleReplacementType = this.mapVehicleTypes[objectId]
    if (vehicleReplacementType) {
      return vehicleReplacementType
    } else {
      let randomInt = this.getRandomInt(0, 2)
      if (randomInt === 0) {
        vehicleReplacementType = VEHICLE_REPLACEMENT_TYPES.RAINBOW
      } else if (randomInt === 1) {
        vehicleReplacementType = VEHICLE_REPLACEMENT_TYPES.TREE
      } else {
        vehicleReplacementType = VEHICLE_REPLACEMENT_TYPES.UNICORN
      }
      this.mapVehicleTypes[objectId] = vehicleReplacementType
      return vehicleReplacementType
    }
  }

  drawFrameOnCanvas (contextToDrawOn, item) {
    // Compute offscreenCanvas position of frame
    const sourceData = this.getFrameData(item.bearing, item.type)
    contextToDrawOn.drawImage(
      this.offscreenCanvas[item.type],
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

        // Get vehicle replacement type from map
        // if existing object, otherwise draw random
        objectScaled.type = this.getVehicleReplacementType(objectScaled.id)

        objectScaled = {
          ...objectScaled,
          ...this.getVehicleReplacementSize(objectScaled)
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
