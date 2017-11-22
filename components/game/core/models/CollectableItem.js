import { TweenLite, TweenMax } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

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
    }, 500)

    this.animate()
  }

  collect () {
    TweenLite.to(this, 1, {
      x: 0,
      y: 0,
      opacity: 0.1,
      onComplete: () => {
        this.destroy()
      }
    })
  }

  animate () {
    this.anim = TweenMax.to(this, 1, {
      currentFrame: 18,
      ease: SteppedEase.config(18),
      repeat: -1
    })
    this.anim.play()
  }

  destroy () {
    this.anim.kill()
    GameEngineStateManager.removeItemToCollect(this.id)
  }
}

export default CollectableItem
