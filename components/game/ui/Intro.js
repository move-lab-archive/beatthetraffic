import React, { Component } from 'react'

import { TimelineLite } from 'gsap'
import SoundsManager from '../../../statemanagement/app/SoundsManager'

class Intro extends Component {
  componentDidMount () {
    SoundsManager.playSound('intro')

    const timeline = new TimelineLite({
      onComplete: () => {
        // Here we can specify a delay before the Intro Div is removed from the dom
        // trick because it takes also 1 sec for the video to start once we dispatch the action
        const delayOnAnimateOut = 1
        this.props.onFinish(delayOnAnimateOut)
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
          <img src='/static/assets/logo/logo-moovel-white.svg' />
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
