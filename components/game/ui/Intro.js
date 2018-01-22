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
      .to('.logo', 0, { opacity: 0 }, '+=2.5')


    timeline.play()
  }

  render () {
    return (
      <div className='game-landing'>
        <div className='title location'>
          Stutt<br />gart
        </div>
        <div className='title click'>Click</div>
        <div className='title the'>the</div>
        <div className='title cars'>
          <div className='highlight'>
            <div className='top-left-corner-one'></div>
            <div className='top-left-corner-two'></div>
            <div className='top-right-corner-one'></div>
            <div className='top-right-corner-two'></div>
            <div className='bottom-left-corner-one'></div>
            <div className='bottom-left-corner-two'></div>
            <div className='bottom-right-corner-one'></div>
            <div className='bottom-right-corner-two'></div>
            cars
          </div>
        </div>
        <div className='title logo'>
          <img src='/static/assets/logo/logo-moovel-white.svg' />
        </div>

        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
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
            font-size: 12rem;
            line-height: 12rem;
          }
          .click {
            font-size: 13.1rem;
          }
          .the {
            font-size: 19.5rem;
          }
          .cars {
            font-size: 14.1rem;
          }

          .highlight{
            width: 40rem;
            height: 15rem;
            margin-top: 0.5rem;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            display: flex;
            justify-content:center;
            align-items:center;
          }

          .highlight .top-left-corner-one{
            width: 3rem;
            height: 1rem;
            background-color: #4EFFFF;
            left: 0;
            top: 0;
            position:absolute;
          }
          .highlight .top-left-corner-two{
            width: 1rem;
            height: 3rem;
            background-color: #4EFFFF;
            left: 0;
            top: 0;
            position:absolute;
          }
          .highlight .top-right-corner-one{
            width: 3rem;
            height: 1rem;
            background-color: #4EFFFF;
            right: 0;
            top: 0;
            position:absolute;
          }
          .highlight .top-right-corner-two{
            width: 1rem;
            height: 3rem;
            background-color: #4EFFFF;
            right: 0;
            top: 0;
            position:absolute;
          }
          .highlight .bottom-left-corner-one{
            width: 3rem;
            height: 1rem;
            background-color: #4EFFFF;
            left: 0;
            bottom: 0;
            position:absolute;
          }
          .highlight .bottom-left-corner-two{
            width: 1rem;
            height: 3rem;
            background-color: #4EFFFF;
            left: 0;
            bottom: 0;
            position:absolute;
          }
          .highlight .bottom-right-corner-one{
            width: 3rem;
            height: 1rem;
            background-color: #4EFFFF;
            right: 0;
            bottom: 0;
            position:absolute;
          }
          .highlight .bottom-right-corner-two{
            width: 1rem;
            height: 3rem;
            background-color: #4EFFFF;
            right: 0;
            bottom: 0;
            position:absolute;
          }

        `}</style>
      </div>
    )
  }
}

export default Intro
