import { TweenLite } from 'gsap'
import GameTempStateManager from '../../../../statemanagement/app/GameTempStateManager'
import PuffAnimationsEngine from '../PuffAnimationsEngine'

class PuffAnimation {
  constructor (x, y, size, id) {
    this.x = x - size / 2
    this.y = y - size / 2
    this.w = size
    this.h = size
    this.id = id
    this.currentFrame = 0

    this.animate()
  }

  animate () {
    this.anim = TweenLite.to(this, 0.5, {
      currentFrame: PuffAnimationsEngine.getNbFrames(),
      ease: SteppedEase.config(PuffAnimationsEngine.getNbFrames()),
      onComplete: () => {
        this.anim.kill()
        // TODO MOVE OUTSIDE, shouldn't know how to remove itself
        GameTempStateManager.removePuffAnimation(this.id)
      }
    })
    this.anim.play()
  }
}

export default PuffAnimation
