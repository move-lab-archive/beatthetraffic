import { TweenLite, TimelineLite } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

class StarsAnimation {
  constructor (x, y, id) {
    this.x = x
    this.y = y
    this.id = id
    this.currentFrame = 0

    this.emitterSize = 50
    this.dotQuantity = 15
    this.dotSizeMax = 20
    this.dotSizeMin = 5

    this.dots = []

    this.timeline = new TimelineLite({ onComplete: () => this.destroy() })
    this.create()
    this.animate()
  }

  create () {
    // create all the dots
    for (let i = 0; i < this.dotQuantity; i++) {
      let dot = {}
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
        height: dot.size
      })
      // this is where we do the animation...
      this.timeline.to(
        dot,
        0.3 + Math.random(),
        {
          opacity: 0,
          x: this.x + Math.cos(dot.angle) * dot.length * 6,
          y: this.y + Math.sin(dot.angle) * dot.length * 6
        },
        0
      )
      this.dots.push(dot)
    }
  }

  getRandomSize (min, max) {
    return min + Math.random() * (max - min)
  }

  animate (timeline) {
    this.timeline.play()
  }

  destroy () {
    this.timeline.kill()
    GameEngineStateManager.removeStarsAnimation(this.id)
  }
}

export default StarsAnimation
