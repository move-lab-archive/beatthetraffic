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
            top: 6rem;
            color: #4EFFFF;
            text-align: center;
            margin-bottom: 3rem;
            animation: flashingTitle 0.1s linear infinite;
          }

          .message {
            text-align: center;
            width: 30rem;
            height: 11.5rem;
            border: 4px solid white;
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
            width: 13rem;
            height: 10vw;
          }
          .score-container{
            position:absolute;
            right: 0rem;
            width: 18rem;
            height: 10vw;
          }

          @media (max-width: 600px) {

            .message {
              margin-top: 25rem;
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
