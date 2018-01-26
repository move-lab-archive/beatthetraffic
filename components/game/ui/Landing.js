import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TweenLite } from 'gsap'

import BtnLanding from './landing/BtnLanding'
import RightCloud from './landing/RightCloud'
import LeftCloud from './landing/LeftCloud'
import Unicorn from './landing/Unicorn'
import LocationMenu from './landing/LocationMenu'

import { showMenu } from '../../../statemanagement/app/AppStateManagement'

// import Gameover from './instructions/Gameover'
/* import Loading from '../../shared/Loading' */
/* NOTE just for style reasons on landing */

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../statemanagement/app/ViewportStateManagement'

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
    this.props.dispatch(restoreCanvasScrolling())

    TweenLite.to('.game-landing', 0.3, {
      opacity: 0,
      delay: 0.5
    })
    TweenLite.to(
      '.change-city,.landing-headline,.btn-landing,.about,.IconTriangle,.mobility-assets',
      0.3,
      {
        opacity: 0,
        delay: 0.5
      }
    )

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
    this.props.dispatch(blockCanvasScrolling())
  }

  render () {
    return (
      <div className='game-landing'>
        <h1 className='landing-headline'>
          BEAT THE TRAFFIC
          <br />
          <span className='city-var'>{this.props.selectedCity}</span>
        </h1>
        <LocationMenu
          isVisible={this.state.citySelectorVisible}
          handleClose={this.handleChangeCityClick}
        />
        <Unicorn />
        <BtnLanding
          loaded={this.props.isGameReadyToPlay}
          onClick={this.handleStartGame}
        />
        {this.state.javascriptLoaded && (
          // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
          // to reuse it easier in Game over and win page
          <div>
            <div
              onClick={this.handleChangeCityClick}
              className={
                this.state.citySelectorVisible ? 'activeLocationMenu' : ''
              }
            >
              <div className='change-city-container'>
                <h4 className='change-city'>CHANGE CITY</h4>
                <img
                  className='IconTriangle'
                  src='/static/assets/icons/icon-triangle.svg'
                />
              </div>
            </div>
            <LeftCloud />
            <RightCloud />
            <div className='mobility-assets'>
              <img
                className='unicorn'
                src='/static/assets/landing/asset-unicorn.png'
              />
              <img
                className='tree'
                src='/static/assets/landing/asset-tree.png'
              />
            </div>

            <div
              className='about'
              onClick={() => {
                this.props.dispatch(showMenu())
              }}
            >
              <h4>ABOUT</h4>
            </div>
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
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .landing-headline {
            position: absolute;
            margin-top: -45px;
            width: 80%;
            z-index: 2;
            animation: fadeInHeadline 1.3s;
            color: #262626;
            left: none;
            transform: translateX(0%);
            transform: translateY(0%);
            text-align: center;
          }

          .city-var {
            color: #ff3bff;
          }

          .change-city-container {
            position: fixed;
            z-index: 14;
            bottom: 1.5rem;
            left: 3rem;
            cursor: pointer;
            animation: fadeIn 2s;
          }
          .change-city {
            cursor: pointer;
            z-index: 14;
            display: inline-block;
            padding-right: 0.5rem;
          }
          .IconTriangle {
            z-index: 14;
            transition-duration: 0.3s;
            transition-delay: 0.3;
            display: inline-block;
            padding-bottom: 1px;
          }
          .activeLocationMenu {
            color: #ff3bff;
          }
          .activeLocationMenu .IconTriangle {
            transform: rotate(180deg);
          }

          .about {
            position: fixed;
            bottom: 1.5rem;
            right: 3rem;
            cursor: pointer;
            animation: fadeIn 2s;
            z-index: 14;
          }
          .about:hover,
          .change-city-container:hover .change-city {
            color: #ff3bff;
          }

          .mobility-assets .unicorn {
            animation: fadeIn 2s;
            width: 8.5rem;
            opacity: 1;
            top: 0.7rem;
            left: 0.5rem;
            z-index: 0;
            position: fixed;
          }
          .mobility-assets .tree {
            animation: fadeIn 2s;
            width: 7rem;
            opacity: 1;
            right: 1rem;
            top: 2.1rem;
            z-index: 0;
            position: fixed;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            70% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeInHeadline {
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

          @media (min-width: 600px) {
            .landing-headline {
              width: 525px;
              text-align: center;
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
    isGameReadyToPlay,
    selectedCity: state.app
      .get('availableCities')
      .get(state.app.get('selectedCity'))
      .get('label')
  }
})(Landing)
