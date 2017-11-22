import { TweenLite } from 'gsap'
import GameTempStateManager from '../../../statemanagement/app/GameTempStateManager'

class CollectableItem {
  constructor (type, img, x, y, w, h, opacity = 1, id) {
    this.type = type
    this.img = img
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.opacity = opacity
    this.id = id
    this.isCollectable = false

    // Wait a bit before making it collectable
    // if not people can just double click when
    // making the car disappear
    setTimeout(() => {
      this.isCollectable = true
    }, 500)
  }

  collect () {
    TweenLite.to(this, 1, {
      x: 0,
      y: 0,
      opacity: 0.1,
      onComplete: () => {
        GameTempStateManager.removeItemToCollect(this.id)
      }
    })
  }

  animate () {
    // TODO change animate img object
  }
}

export default CollectableItem
