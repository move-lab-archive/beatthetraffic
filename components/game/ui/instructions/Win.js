import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'
/*import PopUpAddScore from '../../../shared/PopUpAddScore'*/

import { retry } from '../../../../statemanagement/app/GameStateManagement'

import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import SaveScoreModal from './highscore/SaveScoreModal'

class Win extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displaySaveScoreModal: false
    }

    this.handleDisplaySaveScoreModal = this.handleDisplaySaveScoreModal.bind(
      this
    )
    this.handleHideSaveScoreModal = this.handleHideSaveScoreModal.bind(this)
  }

  componentDidMount () {
    SoundsManager.playSound('youwin')
    SoundsManager.playSound('youwinloop')
  }

  handleDisplaySaveScoreModal () {
    this.setState({ displaySaveScoreModal: true })
  }

  handleHideSaveScoreModal () {
    this.setState({ displaySaveScoreModal: false })
  }

  render () {
    return (
      <div className='instructions-win'>

        <div className='title'>YOU WON</div>
        <div className='message'>
          <div className='score-container'>
            <h4>Your score</h4>
            <div className='score'>
              <h1>{this.props.score}</h1>
              <img src='/static/assets/icons/icon-star-purple.svg' />
            </div>
          </div>
          <div className='ranking-container'>
            <h4>Ranking</h4>
            <div className='score'>
              <h1>{this.props.score}</h1>
            </div>
          </div>
        </div>
        <Button large
          title={`Save your score`}
        />
        <Button
          title={`Play again`}
          onClick={() => this.props.dispatch(retry())}
        />
        <div className='change-city-container'>
          <h4 className='change-city'>PLAY ANOTHER CITY</h4>
          <img
            className='IconTriangle'
            src='/static/assets/icons/icon-triangle.svg'
          />
        </div>
        <style jsx>{`
          .instructions-win {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #262626;
            padding: 5rem;
            background-color: #FFFE4A;
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

          .message {
            text-align: center;
            width: 35rem;
            height: 12rem;
            border-bottom: 4px solid #262626;
            margin-top: 15rem;
            background-color: #FFFE4A;
            position: relative;
          }
          .message h1{
            margin-top: 0;
            line-height: 3rem;
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

          .ranking-container{
            position:absolute;
            left: 0rem;
            width: 15rem;
            height: 10vw;
          }
          .score-container{
            position:absolute;
            right: -3rem;
            width: 30rem;
            height: 10vw;
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
              color: #4EFFFF;
            }
            50% {
              color: #FF3BFF;
            }
            100% {
              color: #4EFFFF;
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
})(Win)
