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
        <div className='message'>
          <h4>Your score</h4>
          <div className='score'>
            <h1>{this.props.score}</h1>
            <img src='/static/assets/icons/icon-star.svg' />
          </div>
        </div>
        <Button large
          title={`Save your score`}
        />
        <Button
          title={`Play again`}
          onClick={() => this.props.dispatch(retry())}
        />
        <style jsx>{`
          .instructions-gameover {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #262626;
            padding: 5rem;
            background-color: white;
            z-index: 100000000000;
            width: 100%;
            height: 100%;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 95%;
            position: fixed;
            top: 6rem;
            color: #FF3BFF;
            text-align: center;
            margin-bottom: 3rem;
          }
          .button-large{
            position: fixed;
            bottom: 80%;
          }

          .message {
            text-align: center;
            border: 4px solid #262626;
            width: 22rem;
            height: 11.5rem;
            position: fixed;
            top: 40%;
            background-color: white;
          }
          .message h1{
            margin-top: 0;
            float: left;
          }
          .message img{
            float:left;
            margin-left: 1rem;
          }
          .message .score{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          @media (max-width: 600px) {

            .message {
              top: 50%;
            }
            .message {
              top: 50%;
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
