import { TweenLite } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'
import PuffAnimationsEngine from '../engines/PuffAnimationsEngine'

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
        this.destroy()
      }
    })
    this.anim.play()
  }

  destroy () {
    this.anim.kill()
    GameEngineStateManager.removePuffAnimation(this.id)
  }
}

export default PuffAnimation
