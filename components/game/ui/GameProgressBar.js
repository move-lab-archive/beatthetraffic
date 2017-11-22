import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TweenLite } from 'gsap'
import raf from 'raf'

import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'

class GameProgressBar extends PureComponent {
  constructor (props) {
    super(props)

    // TODO adapt if all level are not the same time
    this.currentTime = 0
    this.progressByLevel = 1 / props.nbTotalLevel

    this.monitorProgress = this.monitorProgress.bind(this)
  }

  componentDidMount () {
    this.monitorProgress()
    TweenLite.set(this.el, { scaleX: 0 })
  }

  monitorProgress () {
    if (GameEngineStateManager.getCurrentTime() !== this.currentTime) {
      const progressInLevel =
        GameEngineStateManager.getCurrentTime() / this.props.totalDuration || 0
      const progressOffset =
        this.progressByLevel * (this.props.currentLevel - 1)
      const progress = progressOffset + progressInLevel * this.progressByLevel
      TweenLite.set(this.el, { scaleX: progress })
      this.currentTime = GameEngineStateManager.getCurrentTime()
    }
    raf(this.monitorProgress)
  }

  render () {
    return (
      <div className='progress-bar'>
        <div className='progress-bar-content' ref={el => (this.el = el)} />
        <style jsx>{`
          .progress-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.8rem;
            background-color: #262626;
            z-index: 1;
            will-change: transform;
          }

          .progress-bar-content {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fffe4a;
            transform-origin: 0 0;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    totalDuration: Math.trunc(state.video.get('duration')),
    currentLevel: state.game.get('currentLevel'),
    nbTotalLevel: state.game.get('nbTotalLevel')
  }
})(GameProgressBar)
