import { TweenLite, TweenMax } from 'gsap'
import GameTempStateManager from '../../../statemanagement/app/GameTempStateManager'

class CollectableItem {
  constructor (type, x, y, w, h, opacity = 1, id) {
    this.type = type
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.opacity = opacity
    this.id = id
    this.isCollectable = false
    this.currentFrame = 0

    // Wait a bit before making it collectable
    // if not people can just double click when
    // making the car disappear
    setTimeout(() => {
      this.isCollectable = true
      this.animate()
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
    const anim = TweenMax.to(this, 2, {
      currentFrame: 18,
      ease: SteppedEase.config(18),
      repeat: -1
    }).play()
    anim.play()
  }
}

export default CollectableItem
