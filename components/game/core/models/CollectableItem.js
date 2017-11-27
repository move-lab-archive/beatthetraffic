import { TimelineMax, Linear } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'
import CollectableItemsEngine from '../engines/CollectableItemsEngine'

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
    this.anim = new TimelineMax({ onComplete: () => this.destroy() })

    // Todo make that configurable
    const durationBeforeDisapearing = 10
    const blinkingDuration = 0.5
    const timeStartBlinking = durationBeforeDisapearing / 2
    const repeatBlinking =
      (durationBeforeDisapearing - timeStartBlinking) / blinkingDuration

    this.anim
      // first part of timeline is the rotation of the collectable item
      .to(
        this,
        1,
        {
          currentFrame: CollectableItemsEngine.getNbFrames(this.type),
          ease: SteppedEase.config(
            CollectableItemsEngine.getNbFrames(this.type)
          ),
          repeat: durationBeforeDisapearing - 0.5 //  little hack because we don't want this anim to finish after the blinking one
        },
        0
      )
      // second part is the blinking that happen
      // TODO would be great to have the blinking accelerate
      .to(
        this,
        blinkingDuration / 2,
        {
          opacity: 0,
          yoyo: true,
          repeat: repeatBlinking,
          ease: Power0.easeNone
        },
        timeStartBlinking
      )
    this.anim.play()
  }

  destroy () {
    this.anim.kill()
    GameEngineStateManager.removeItemToCollect(this.id)
  }
}

export default CollectableItem
