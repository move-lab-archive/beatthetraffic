import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TweenLite } from 'gsap'

import BtnLanding from './landing/BtnLanding'
import RightCloud from './landing/RightCloud'
import LeftCloud from './landing/LeftCloud'
import Unicorn from './landing/Unicorn'

import { showMenu } from '../../../statemanagement/app/AppStateManagement'

// import Gameover from './instructions/Gameover'
/* import Loading from '../../shared/Loading' */
/* NOTE just for style reasons on landing */

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../statemanagement/app/ViewportStateManagement'
import ChangeCityButton from '../../shared/ChangeCityButton'

class Landing extends Component {
  constructor (props) {
    super(props)

    this.handleStartGame = this.handleStartGame.bind(this)

    this.state = {
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
      '.landing-headline,.btn-landing,.about,.mobility-assets',
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
          <span className='city-var city'>{this.props.selectedCity}</span>
        </h1>
        <Unicorn />
        <BtnLanding
          loaded={this.props.isGameReadyToPlay}
          onClick={this.handleStartGame}
        />
        <img className='tree' src='/static/assets/landing/asset-tree.png' />
        {this.state.javascriptLoaded && (
          <div>
            <ChangeCityButton label='CHANGE CITY' />
            <div
              className='about'
              onClick={() => {
                this.props.dispatch(showMenu())
              }}
            >
              <h4>ABOUT</h4>
            </div>
            <div className='powered'>
              <h4>
                POWERED BY{' '}
                <a href='https://www.google.de/' target='_blank'>
                  OPEN DATA CAM
                </a>
              </h4>
            </div>
            <LeftCloud />
            <RightCloud />
            <div className='mobility-assets'>
              <img
                className='unicorn'
                src='/static/assets/landing/asset-unicorn.png'
              />
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
            margin-top: -10px;
            width: 80%;
            z-index: 2;
            animation: fadeInHeadline 1.3s;
            color: #262626;
            text-align: center;
          }

          .city-var {
            display: block;
            color: #ff3bff;
          }

          .about {
            position: fixed;
            bottom: 1.5rem;
            right: 3rem;
            cursor: pointer;
            animation: fadeIn 2s;
            z-index: 14;
          }
          .about:hover {
            color: #ff3bff;
          }

          .powered {
            position: fixed;
            top: 1.5rem;
            animation: fadeIn 2s;
            z-index: 14;
            margin: 0;
            padding: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          .mobility-assets .unicorn {
            animation: fadeIn 2s;
            width: 8.5rem;
            opacity: 1;
            top: 0.7rem;
            left: 0.5rem;
            z-index: 0;
            position: fixed;
            display: none;
          }

          .tree {
            animation: fadeInHeadline 1.3s;
            width: 7rem;
            opacity: 1;
            left: 50%;
            transform: translateX(-50%) translateY(-125px);
            z-index: 100;
            position: absolute;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            70% {
              opacity: 0;
            }
            100% {
              opacity: 1;
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

          @keyframes outx {
            0% {
              opacity: 1;
            }
            99% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes incity {
            0% {
              opacity: 0;
            }
            99% {
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
            .tree {
            }
          }

          @media (max-height: 400px) {
            .tree {
              transform: translateX(-50%) translateY(-90px);
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
