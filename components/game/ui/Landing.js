import React, { Component } from 'react'
import { connect } from 'react-redux'

import BtnLanding from './landing/BtnLanding'
import RightCloud from './landing/RightCloud'
import LeftCloud from './landing/LeftCloud'
import Unicorn from './landing/Unicorn'

// import Gameover from './instructions/Gameover'
/* import Loading from '../../shared/Loading' */
/* NOTE just for style reasons on landing */

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../statemanagement/app/ViewportStateManagement'
import ChangeCityButtonLanding from '../../shared/ChangeCityButtonLanding'

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
    // TweenLite.to('.game-landing', 0.3, {
    //   opacity: 0,
    //   delay: 0.5
    // })
    // TweenLite.to(
    //   '.landing-headline,.btn-landing,.about,.mobility-assets',
    //   0.3,
    //   {
    //     opacity: 0,
    //     delay: 0.5
    //   }
    // )

    // const backgroundOpacityAnimationDuration = 0.5

    // TweenLite.to('.leftcloud, .rightcloud', 0.3, {
    //   opacity: 0,
    //   delay: 0.5,
    //   onStart: () => this.props.handleStart(backgroundOpacityAnimationDuration)
    // })

    this.props.handleStart()

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
        <div className='landing-content'>
          <img className='tree' src='/static/assets/landing/asset-tree.png' />
          <h1 className='landing-headline'>
            BEAT THE TRAFFIC
            <span className='city-var city'>{this.props.selectedCity}</span>
          </h1>
          <BtnLanding
            loaded={this.props.isGameReadyToPlay}
            onClick={this.handleStartGame}
          />
        </div>
        {this.state.javascriptLoaded && (
          <div>
            <ChangeCityButtonLanding />
            <LeftCloud />
            <RightCloud />
            <div className='about'>
              <h4>
                <a href='https://www.google.de/' target='_blank'>
                  OPEN DATA CAM
                </a>
              </h4>
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

          .landing-content {
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: -50px;
          }

          .landing-headline {
            width: 80%;
            animation: fadeInHeadline 1.3s;
            color: #262626;
            text-align: center;
          }

          .city-var {
            display: block;
            color: #ff3bff;
          }

          .tree {
            animation: fadeInHeadline 1.3s;
            width: 7rem;
            opacity: 1;
            left: 50%;
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

          @media (max-height: 560px) {
            .landing-content {
              margin-top: -100px;
            }
          }

          @media (max-height: 500px) {
            .tree {
              display: none;
            }

            .landing-content {
              margin-top: -110px;
            }
          }

          @media (max-height: 460px) {
            .landing-content {
              margin-top: -140px;
            }

            .landing-headline {
              margin-bottom: 2rem;
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
