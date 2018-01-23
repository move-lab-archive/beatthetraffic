import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'

import { retry } from '../../../../statemanagement/app/GameStateManagement'
import SoundsManager from '../../../../statemanagement/app/SoundsManager'

class Gameover extends Component {
  componentDidMount () {
    SoundsManager.playSound('youlose')
    SoundsManager.playSound('youloseloop')
  }

  render () {
    return (
      <div className='instructions-gameover'>
        <div className='title'>GAME OVER</div>
        <div className='content'>
          <div className='message'>
            <h4>Your score</h4>
            <div className='score'>
              <h1>{this.props.score}</h1>
              <img src='/static/assets/icons/icon-star.svg' />
            </div>
          </div>
          <div className='cta'>
            <Button large title={`Save your score`} />
            <Button
              title={`Play again`}
              onClick={() => this.props.dispatch(retry())}
            />
          </div>
        </div>
        <style jsx>{`
          .instructions-gameover {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: white;
            padding: 5rem;
            background-color: #262626;
            z-index: 100000000000;
            min-height: 550px;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 80%;
            top: 6rem;
            color: white;
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
            text-align: center;
            border: 4px solid white;
            width: 22rem;
            height: 11.5rem;
            background-color: #262626;
          }
          .message h1 {
            margin-top: 0;
            line-height: 3rem;
            float: left;
          }
          .message img {
            float: left;
            margin-left: 1rem;
          }
          .message .score {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
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
