import { TweenMax, TweenLite, TimelineLite } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'
import StarsAnimationsEngine from '../engines/StarsAnimationsEngine'

class StarsAnimation {
  constructor (x, y, id, canvasResolution) {
    this.x = x
    this.y = y
    this.id = id

    this.emitterSize = 45 * canvasResolution.h / 720
    this.dotQuantity = 10
    this.dotSizeMax = 25 * canvasResolution.h / 720
    this.dotSizeMin = 10 * canvasResolution.h / 720

    this.maxAnimDuration = 0

    this.dots = []

    this.timeline = new TimelineLite({ onComplete: () => this.destroy() })
    this.create()
    this.animate()
  }

  create () {
    // create all the dots
    for (let i = 0; i < this.dotQuantity; i++) {
      let dot = {}
      dot.currentFrame = 0
      dot.size = this.getRandomSize(this.dotSizeMin, this.dotSizeMax)
      dot.angle = Math.random() * Math.PI * 2 // random angle
      // figure out the maximum distance from the center,
      // factoring in the size of the dot (it must never go outside the circle),
      // and then pick a random spot along that length where we'll plot the point.
      dot.length = Math.random() * (this.emitterSize / 2 - dot.size / 2)
      // place the dot at a random spot within the emitter, and set its size.
      TweenLite.set(dot, {
        x: this.x + Math.cos(dot.angle) * dot.length,
        y: this.y + Math.sin(dot.angle) * dot.length,
        width: dot.size,
        height: dot.size,
        opacity: 1
      })

      const animationDuration = 0.3 + Math.random()

      this.timeline
        .to(
          dot,
          animationDuration,
          {
            x: this.x + Math.cos(dot.angle) * dot.length * 6,
            y: this.y + Math.sin(dot.angle) * dot.length * 6
          },
          0
        )
        .to(dot, animationDuration, { opacity: 0, ease: Power4.easeIn }, 0)
        .to(
          dot,
          animationDuration / 2,
          {
            currentFrame: StarsAnimationsEngine.getNbFrames(),
            ease: SteppedEase.config(StarsAnimationsEngine.getNbFrames()),
            repeat: 2
          },
          0
        )
      this.dots.push(dot)
    }
  }

  getRandomSize (min, max) {
    return min + Math.random() * (max - min)
  }

  animate () {
    this.timeline.play()
  }

  destroy () {
    this.timeline.kill()
    GameEngineStateManager.removeStarsAnimation(this.id)
  }
}

export default StarsAnimation
