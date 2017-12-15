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
    TweenLite.to('.change-city,.landing-headline,.btn-landing,.about,.IconTriangle', 0.3, {
      opacity: 0,
      delay: 0.5
    })

    const backgroundOpacityAnimationDuration = 0.5

    TweenLite.to('.leftcloud, .rightcloud', 0.3, {
      opacity: 0,
      delay: 0.5,
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
        <h2 className='landing-headline'>
          STUTTGART IS JAM-PACKED WITH HEAVY TRAFFIC!
        </h2>
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
          <div onClick={this.handleChangeCityClick} className={this.state.citySelectorVisible? 'activeLocationMenu':''}>
            <div className='change-city-container'>
              <h4 className='change-city'>Change city</h4>
              <img
                className='IconTriangle'
                src='/static/assets/icons/icon-triangle.svg'
              />
            </div>
          </div>
        )}
        <div className='about'>
          <h4>About</h4>
        </div>

        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background-color: white;
            will-change: transform;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
            cursor: auto;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .landing-headline {
            position: absolute;
            margin-top: -80px;
            width: 220px;
            color: black;
            will-change: transform;
            z-index: 5;
            animation: fadeIn 1.3s;
            color: #262626;
          }

          .change-city-container{
            position: fixed;
            z-index: 14;
            bottom: 1.5rem;
            left: 3rem;
          }
          .change-city {
            animation: fadeIn 0.5s;
            cursor: pointer;
            z-index: 14;
            display:inline-block;
            padding-right: 0.7rem;
          }
          .IconTriangle{
            z-index: 14;
            animation: fadeIn 0.5s;
            transition-duration: 0.3s;
            transition-delay: 0.3;
            display:inline-block;
            padding-bottom: 1px;
          }
          .activeLocationMenu{
            color: #FF3BFF;
          }
          .activeLocationMenu .IconTriangle{
            transform: rotate(180deg);
          }

          .about{
            position: fixed;
            bottom: 1.5rem;
            right: 3rem;
            cursor: pointer;
            animation: fadeIn 1.3s;
          }
          .about:hover, .change-city:hover{
            //color: #FF3BFF;
          }

          @media (min-width: 600px) {
            .landing-headline {
              width: 525px;
              text-align: center;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0;
            }
            100% {
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
