import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TweenLite } from 'gsap'

import BtnLanding from './landing/BtnLanding'
import RightCloud from './landing/RightCloud'
import LeftCloud from './landing/LeftCloud'
import Unicorn from './landing/Unicorn'
import LocationMenu from './landing/LocationMenu'

/*import Win from './instructions/Win'*/
/*NOTE just for style reasons on landing*/

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
    TweenLite.to('.change-city,.landing-headline,.btn-landing,.about,.IconTriangle,.mobility-assets', 0.3, {
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


        <BtnLanding
          loaded={this.props.isGameReadyToPlay}
          onClick={this.handleStartGame}
        />

        {this.state.javascriptLoaded && (
          // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
          // to reuse it easier in Game over and win page
          <div>
            <div onClick={this.handleChangeCityClick} className={this.state.citySelectorVisible? 'activeLocationMenu':''}>
              <div className='change-city-container'>
                <h4 className='change-city'>Change city</h4>
                <img
                  className='IconTriangle'
                  src='/static/assets/icons/icon-triangle.svg'
                />
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
                <img
                  className='rainbow'
                  src='/static/assets/landing/asset-rainbow.png'
                />
              </div>
            </div>
            <div className='about'>
              <h4>About</h4>
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
            color: #FF3BFF;
            z-index: 2;
            animation: fadeIn 1.3s;
            color: #262626;
            left: none;
            transform: translateX(0%);
            transform: translateY(0%);
          }

          .change-city-container{
            position: fixed;
            z-index: 14;
            bottom: 1.5rem;
            left: 3rem;
            cursor: pointer;
          }
          .change-city {
            animation: fadeIn 1.3s;
            cursor: pointer;
            z-index: 14;
            display:inline-block;
            padding-right: 0.7rem;
          }
          .IconTriangle{
            z-index: 14;
            animation: fadeIn 1.3s;
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
            z-index: 14;
          }
          .about:hover, .change-city-container:hover .change-city{
            color: #FF3BFF;
          }

          .mobility-assets{
            display: none;
          }
          /*.mobility-assets .unicorn{
            max-width: 100%;
            animation: scaleAssetsUnicorn 14s linear infinite;
            opacity: 0;
            left: 0%;
            top: -10%;
            z-index: -100;
            position: fixed;
          }
          .mobility-assets .tree{
            max-width: 100%;
            animation: scaleAssetsTree 9s linear infinite;
            opacity: 0;
            left: 20%;
            top: 6%;
            z-index: -100;
            position: fixed;
          }
          .mobility-assets .rainbow{
            max-width: 100%;
            animation: scaleAssetsRainbow 7s linear infinite;
            opacity: 0;
            left: 0%;
            top: 30%;
            z-index: -100;
            position: fixed;
          } */

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

        /*  @keyframes scaleAssetsUnicorn {
            0% {
              opacity: 0;
              transform: translateX(0%) translateY(0%) scale(0.2);
            }
            10% {
              opacity: 0.4;
            }
            100% {
              transform: scale(0.5) translateY(-100%) translateX(-150%);
              opacity: 0;
            }
          }

          @keyframes scaleAssetsRainbow {
            0% {
              opacity: 0;
              transform: translateX(0%) translateY(0%) scale(0.4);
            }
            10% {
              opacity: 0.4;
            }
            100% {
              transform: scale(1) translateX(60%) translateY(-40%);
              opacity: 0;
            }
          }

          @keyframes scaleAssetsTree {
            0% {
              opacity: 0;
              transform: translateX(0%) translateY(0%) scale(0.4);
            }
            10% {
              opacity: 0.4;
            }
            100% {
              transform: scale(0.7) translateX(180%) translateY(50%);
              opacity: 0;
            }
          } */

          @media (min-width: 600px) {
            .landing-headline {
              width: 525px;
              text-align: center;
            }

            /*.mobility-assets .unicorn{
              max-width: 70%;
              left: 10%;
              top: 50%;
              opacity: 0;
              transform: scale(0);
            }
            .mobility-assets .tree{
              max-width: 30%;
              left: 50%;
              top: 6%;
              opacity: 0;
              transform: scale(0);
            }
            .mobility-assets .rainbow{
              max-width: 30%;
              left: 20%;
              top: 10%;
              opacity: 0;
              transform: scale(0);
            }*/
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
