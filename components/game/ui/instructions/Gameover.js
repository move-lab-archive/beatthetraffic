import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'
import PopUpAddScore from '../../../shared/PopUpAddScore'

import { retry } from '../../../../statemanagement/app/GameStateManagement'
import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../../statemanagement/app/ViewportStateManagement'
import ChangeCityButton from '../../../shared/ChangeCityButton'

class Gameover extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showAddScorePopup: false
    }

    this.closePopupAddScore = this.closePopupAddScore.bind(this)
  }

  componentDidMount () {
    SoundsManager.playSound('youlose')
    SoundsManager.playSound('youloseloop')

    this.props.dispatch(blockCanvasScrolling())
  }

  componentWillUnmount () {
    this.props.dispatch(restoreCanvasScrolling())
  }

  closePopupAddScore () {
    this.setState({ showAddScorePopup: false })
  }

  showPopupAddScore () {
    this.setState({ showAddScorePopup: true })
  }

  render () {
    return (
      <div className='instructions-gameover'>
        <div className='title'>GAME OVER</div>
        <div className='content'>
          <div className='message'>
            <h4>Your score</h4>
            <div className='score'>
              <h1>300</h1>
              <img src='/static/assets/icons/icon-star.svg' />
            </div>
          </div>
          <div className='cta'>
            <Button
              large
              title={`Save your score`}
              onClick={() => this.showPopupAddScore()}
            />
            <Button
              title={`Play again`}
              onClick={() => this.props.dispatch(retry())}
            />
          </div>
        </div>
        <ChangeCityButton label='PLAY ANOTHER CITY' white noAnim />
        {this.state.showAddScorePopup && (
          <PopUpAddScore onClose={this.closePopupAddScore} />
        )}
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
          }

          .cta {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .message {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border-bottom: 4px solid white;

            // increase vertical spacing between flex-box item
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          .message h4 {
            margin-bottom: 0.4rem;
          }

          .score {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .score h1 {
            margin: 0;
            margin-right: 0.5rem;
          }

          @media (max-height: 575px) {
            .title {
              font-size: 7rem;
              line-height: 8rem;
            }

            .message {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
          }

          @media (max-height: 475px) {
            .title {
              font-size: 6.5rem;
              line-height: 7rem;
            }

            .message {
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
    currentLevel: state.game.get('currentLevel')
  }
})(Gameover)
