import { TweenLite } from 'gsap'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'
import PuffAnimationsEngine from '../engines/PuffAnimationsEngine'

class PuffAnimation {
  constructor (x, y, w, h, id) {
    this.x = x - w / 2
    this.y = y - h / 2
    this.w = w
    this.h = h
    this.id = id
    this.currentFrame = 0

    this.animate()
  }

  animate () {
    this.anim = TweenLite.to(this, 0.4, {
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
