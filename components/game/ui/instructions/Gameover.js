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
              <h1>300</h1>
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
        <div className='change-city-container'>
          <h4 className='change-city'>PLAY ANOTHER CITY</h4>
          <img
            className='IconTriangle'
            src='/static/assets/icons/icon-triangle-white.svg'
          />
        </div>
        <style jsx>{`
          .instructions-gameover {
            color: white;
            background-color: #262626;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 5rem;
            z-index: 100000000000;
            width: 100%;
            height: 100%;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 80%;
            position: fixed;
            top: 15%;
            color: #4EFFFF;
            text-align: center;
            margin-bottom: 3rem;
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
            width: 30rem;
            height: 12rem;
            border-bottom: 4px solid white;
            margin-top: 15rem;
            background-color: #262626;
            position: relative;
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
          .message .score h1{
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
          .change-city-container:hover .change-city {
            color: #ff3bff;
          }

          @media (max-width: 600px) {

            .message {
              margin-top: 25rem;
            }

          }

          @media (max-height: 500px) {

            .title {
              top: 3rem;
            }

            .message {
              margin-top: 6rem;
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
