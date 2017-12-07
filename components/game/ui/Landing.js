import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TweenLite } from 'gsap'

import BtnLanding from './landing/BtnLanding'
import RightCloud from './landing/RightCloud'
import LeftCloud from './landing/LeftCloud'
import Unicorn from './landing/Unicorn'
import LocationMenu from './landing/LocationMenu'

class Landing extends Component {
  constructor (props) {
    super(props)

    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleChangeCityClick = this.handleChangeCityClick.bind(this)

    this.state = {
      citySelectorVisible: false, // NOTE tdurand, this logic could be pushed into the locationMenu component to reuse it easier in Game over and win page
      javascriptLoaded: false
    }
  }

  handleStartGame () {
    TweenLite.to('.game-landing', 0.3, {
      backgroundColor: 'transparent',
      delay: 0.5
    })
    TweenLite.to('.change-city,.landing-headline,.btn-landing,.unicorn', 0.3, {
      scale: 1,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.5
    })
    TweenLite.to('.leftcloud', 0.8, {
      x: '-100%',
      ease: Power4.easeOut,
      delay: 1.5
    })

    const backgroundOpacityAnimationDuration = 0.5

    TweenLite.to('.rightcloud', 0.8, {
      x: '100%',
      ease: Power4.easeOut,
      delay: 1.5,
      onStart: () => this.props.handleStart(backgroundOpacityAnimationDuration)
    })

    /*  TweenLite.to('.game-landing', backgroundOpacityAnimationDuration, {
      //opacity: 0, // NOTE: changed to general opacity, background color animation is slower
      delay: 1.5,
    }) */
  }

  // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
  // to reuse it easier in Game over and win page
  handleChangeCityClick () {
    if (this.state.citySelectorVisible) {
      this.setState({
        citySelectorVisible: false
      })
    } else {
      this.setState({
        citySelectorVisible: true
      })
    }
  }

  componentDidMount () {
    this.setState({
      javascriptLoaded: true
    })
  }

  render () {
    return (
      <div className='game-landing'>
        <h1 className='landing-headline'>
          CITIES ARE JAM-PACKED WITH HEAVY TRAFFIC!
        </h1>
        <LocationMenu
          isVisible={this.state.citySelectorVisible}
          handleClose={this.handleChangeCityClick}
        />
        <Unicorn />
        <LeftCloud />
        <RightCloud />
        <BtnLanding
          loaded={this.props.isGameReadyToPlay}
          onClick={this.handleStartGame}
        />

        {this.state.javascriptLoaded && (
          // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
          // to reuse it easier in Game over and win page
          <div onClick={this.handleChangeCityClick} className='change-city'>
            <h4>Change city</h4>
          </div>
        )}
        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background-color: #fffe4a;
            will-change: transform;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
            cursor: auto;
          }

          .landing-headline {
            position: absolute;
            font-size: 4rem;
            line-height: 4.7rem;
            top: 13%;
            right: -6%;
            color: black;
            width: 300px;
            will-change: transform;
            z-index: 5;
            animation: scaleInAnimation 2.7s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .change-city {
            position: fixed;
            bottom: 1.5rem;
            left: 3rem;
            animation: scaleInAnimation 2.7s cubic-bezier(0.075, 0.82, 0.165, 1);
            cursor: pointer;
          }

          @media (min-width: 450px) {
            .landing-headline {
              right: 20%;
              top: 20%;
            }
          }

          @keyframes scaleInAnimation {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            70% {
              transform: scale(0);
              opacity: 0;
            }
            80% {
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  const isGameReadyToPlay =
    state.objectTracker.get('fetched') && state.video.get('isReadyToPlay')

  return {
    isGameReadyToPlay
  }
})(Landing)
