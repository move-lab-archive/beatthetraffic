import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TimelineLite } from 'gsap'
import SoundsManager from '../../../statemanagement/app/SoundsManager'
import { prefixURL } from '../../../utils/url';

class Intro extends Component {
  componentDidMount() {
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
      .to('.location', 0, { opacity: 1 }, '+=0.5')
      .to('.location', 0, { opacity: 0 }, '+=1')
      .to('.click', 0, { opacity: 1 })
      .to('.click', 0, { opacity: 0 }, '+=1')
      .to('.the', 0, { opacity: 1 })
      .to('.the', 0, { opacity: 0 }, '+=1')
      .to('.cars', 0, { opacity: 1 })
      .to('.cars', 0, { opacity: 0 }, '+=1')
      .to('.logo', 0, { opacity: 1 })
      .to('.logo', 0, { opacity: 0 }, '+=1')
      .to('.level', 0, { opacity: 1 })
      .to('.level', 0, { opacity: 0 }, '+=1')

    timeline.play()
  }

  render() {
    return (
      <div className='game-landing'>
        <div className='title location'>{this.props.selectedCity}</div>
        <div className='title click'>Click</div>
        <div className='title the'>the</div>
        <div className='title cars'>
          <div className='highlight'>
            <div className='top-left-corner-one' />
            <div className='top-left-corner-two' />
            <div className='top-right-corner-one' />
            <div className='top-right-corner-two' />
            <div className='bottom-left-corner-one' />
            <div className='bottom-left-corner-two' />
            <div className='bottom-right-corner-one' />
            <div className='bottom-right-corner-two' />
            cars
          </div>
        </div>
        <div className='title level'>LEVEL {this.props.currentLevel}</div>

        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 8;
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
          .location {
            font-size: 6rem;
            line-height: 7rem;
            min-width: 320px;
          }
          .click {
            font-size: 13rem;
          }
          .the {
            font-size: 19rem;
          }
          .cars {
            font-size: 13rem;
          }

          .level {
            font-size: 5rem;
            color: white;
          }

          .highlight {
            width: 36rem;
            height: 15rem;
            margin-top: 0.5rem;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .highlight .top-left-corner-one {
            width: 3rem;
            height: 1rem;
            background-color: #4effff;
            left: 0;
            top: 0;
            position: absolute;
          }
          .highlight .top-left-corner-two {
            width: 1rem;
            height: 3rem;
            background-color: #4effff;
            left: 0;
            top: 0;
            position: absolute;
          }
          .highlight .top-right-corner-one {
            width: 3rem;
            height: 1rem;
            background-color: #4effff;
            right: 0;
            top: 0;
            position: absolute;
          }
          .highlight .top-right-corner-two {
            width: 1rem;
            height: 3rem;
            background-color: #4effff;
            right: 0;
            top: 0;
            position: absolute;
          }
          .highlight .bottom-left-corner-one {
            width: 3rem;
            height: 1rem;
            background-color: #4effff;
            left: 0;
            bottom: 0;
            position: absolute;
          }
          .highlight .bottom-left-corner-two {
            width: 1rem;
            height: 3rem;
            background-color: #4effff;
            left: 0;
            bottom: 0;
            position: absolute;
          }
          .highlight .bottom-right-corner-one {
            width: 3rem;
            height: 1rem;
            background-color: #4effff;
            right: 0;
            bottom: 0;
            position: absolute;
          }
          .highlight .bottom-right-corner-two {
            width: 1rem;
            height: 3rem;
            background-color: #4effff;
            right: 0;
            bottom: 0;
            position: absolute;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    selectedCity: state.app
      .get('availableCities')
      .get(state.app.get('selectedCity'))
      .get('label'),
    currentLevel: state.game.get('currentLevel')
  }
})(Intro)
