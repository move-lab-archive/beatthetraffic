import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'

import { retry } from '../../../../statemanagement/app/GameStateManagement'
import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../../statemanagement/app/ViewportStateManagement'
import ChangeCityButton from '../../../shared/ChangeCityButton'
import ScoreBox from './shared/ScoreBox'

class Gameover extends Component {
  componentDidMount () {
    SoundsManager.playSound('youlose')
    SoundsManager.playSound('youloseloop')

    this.props.dispatch(blockCanvasScrolling())

    // Redirect back to landing page after 20s
    this.timeoutRedirectToLanding = setTimeout(() => {
      // Do not redirect if we opened up the menu
      if (!this.props.showMenu) {
        window.location.href = `/${this.props.city}/level/1`
      }
    }, 20000)
  }

  componentWillUnmount () {
    this.props.dispatch(restoreCanvasScrolling())

    if (this.timeoutRedirectToLanding) {
      clearTimeout(this.timeoutRedirectToLanding)
    }
  }

  render () {
    return (
      <div className='instructions-gameover'>
        <div className='title'>GAME OVER</div>
        <div className='content'>
          <ScoreBox
            score={this.props.score}
            nbCarsConverted={this.props.nbCarsConverted}
          />
        </div>
        <div className='cta'>
          <Button
            large
            title={`Play again`}
            onClick={() => this.props.dispatch(retry())}
          />
        </div>
        <ChangeCityButton label='PLAY ANOTHER CITY' white noAnim />
        <style jsx>{`
          .instructions-gameover {
            color: white;
            background-color: #262626;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            padding-bottom: 5rem;
            width: 100%;
            height: 100%;
            z-index: 10; // only for styling from landing page
            cursor: default;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 80%;
            color: #4effff;
            text-align: center;
            animation: flashingTitle 0.1s linear infinite;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          .cta {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-height: 575px) {
            .title {
              font-size: 7rem;
              line-height: 8rem;
            }

            .content {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
          }

          @media (max-height: 475px) {
            .title {
              font-size: 6.5rem;
              line-height: 7rem;
            }

            .content {
              margin-top: 0rem;
              margin-bottom: 0rem;
            }
          }

          @keyframes flashingTitle {
            0% {
              color: white;
            }
            50% {
              color: #ff3bff;
            }
            100% {
              color: white;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    score: state.game.get('score'),
    currentLevel: state.game.get('currentLevel'),
    nbCarsConverted: state.game.get('nbCarsConverted'),
    city: state.app.get('selectedCity'),
    showMenu: state.app.get('showMenu')
  }
})(Gameover)
