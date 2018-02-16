import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'
import ChangeCityButton from '../../../shared/ChangeCityButton'

import { retry } from '../../../../statemanagement/app/GameStateManagement'

import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import PopUpAddScore from '../../../shared/PopUpAddScore'

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../../statemanagement/app/ViewportStateManagement'

class Win extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showAddScorePopup: false
    }

    this.closePopupAddScore = this.closePopupAddScore.bind(this)
  }

  componentDidMount () {
    SoundsManager.playSound('youwin')
    SoundsManager.playSound('youwinloop')

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
      <div className='instructions-win'>
        <div className='title'>YOU WON</div>
        <div className='content'>
          <div className='message'>
            <div className='ranking-container'>
              <h4>Ranking</h4>
              <div className='score'>
                <h1>{this.props.score}</h1>
              </div>
            </div>
            <div className='score-container'>
              <h4>Your score</h4>
              <div className='score'>
                <h1>{this.props.score}</h1>
                <img src='/static/assets/icons/icon-star-purple.svg' />
              </div>
            </div>
          </div>
        </div>
        <Button
          large
          title={`Save your score`}
          onClick={() => this.showPopupAddScore()}
        />
        {/* <div className='cta-secondary'>
          <Button
            title={`Play again`}
            onClick={() => this.props.dispatch(retry())}
          />
          <div className='cta-secondary-separator' />
          <Button title={`? todo`} />
        </div> */}
        <ChangeCityButton label='PLAY ANOTHER CITY' noAnim />
        {this.state.showAddScorePopup && (
          <PopUpAddScore
            onClose={this.closePopupAddScore}
            score={this.props.score}
            city={this.props.currentCity}
          />
        )}
        <style jsx>{`
          .instructions-win {
            color: #262626;
            background-color: #fffe4a;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            padding-bottom: 5rem;
            width: 100%;
            height: 100%;
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
          }

          .message {
            display: flex;
            flex-direction: row;
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

          .score-container,
          .ranking-container {
            flex-direction: column;
            align-items: center;
          }

          .ranking-container {
            margin-right: 2rem;
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

          .cta-secondary {
            display: flex;
          }

          .cta-secondary-separator {
            width: 2rem;
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
              color: #4effff;
            }
            50% {
              color: #ff3bff;
            }
            100% {
              color: #4effff;
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
    currentCity: state.app.get('selectedCity')
  }
})(Win)
