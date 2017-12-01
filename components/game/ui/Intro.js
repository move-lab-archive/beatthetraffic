import React, { Component } from 'react'

import { TimelineLite } from 'gsap'
import SoundsManager from '../../../statemanagement/app/SoundsManager'

class Intro extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animateOut: false
    }
  }

  componentDidMount () {
    SoundsManager.playSound('intro')

    const timeline = new TimelineLite({
      onComplete: () => {
        const cloudAnimationOutDuration = 1
        this.setState({
          animateOut: true
        })
        this.props.onFinish(cloudAnimationOutDuration)
      }
    })

    timeline
      .to('.beat', 0, { opacity: 1 }, '+=0.5')
      .to('.beat', 0, { opacity: 0 }, '+=1')
      .to('.the', 0, { opacity: 1 })
      .to('.the', 0, { opacity: 0 }, '+=1')
      .to('.traffic', 0, { opacity: 1 })
      .to('.traffic', 0, { opacity: 0 }, '+=1')
      .to('.location', 0, { opacity: 1 })
      .to('.location', 0, { opacity: 0 }, '+=1')
      .to('.logo', 0, { opacity: 1 })
      .to('.logo', 0, { opacity: 0 }, '+=1')
      .to('.catch', 0, { opacity: 1 }, '+=0.85')
      .to('.catch', 0, { opacity: 0 }, '+=2')
      .to('.game-indicators, .menu-button, .progress-bar, .level-name, .audio-button', 0.3, { opacity: 1 }, '+=0') // 7.8s in music

    timeline.play()
  }

  render () {
    return (
      <div className='game-landing'>
        <div className='title beat'>Beat</div>
        <div className='title the'>The</div>
        <div className='title traffic'>Traffic</div>
        <div className='title location'>
          Stutt<br />gart
        </div>
        <div className='title logo'>
          <img src="/static/assets/logo/logo-moovel-white.svg"></img>
        </div>
        <div className='title catch'>Catch the vehicles!</div>
        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background: transparent;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
          }

          .title {
            position: fixed;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 9rem;
            line-height: 8rem;
            color: yellow;
            max-width: 95%;
            word-wrap: break-word;
            text-align: center;
            opacity: 0;
            text-transform: uppercase;
          }

          .beat {
            font-size: 15rem;
          }
          .the {
            font-size: 19rem;
          }
          .traffic {
            font-size: 9rem;
          }
          .location {
            font-size: 12rem;
            line-height: 12rem;
          }
          .catch {
            font-size: 8rem;
            line-height: 8rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Intro
