import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../../shared/Button'

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
              <img src='/static/assets/icons/icon-star.svg' />
            </div>
          </div>
          <div className='ranking-container'>
            <h4>Ranking</h4>
            <div className='score'>
              <h1>{this.props.score}</h1>
            </div>
          </div>
        </div>
        <img
          className='cloud-1'
          src='/static/assets/gameover-won/cloud-1.svg'
        />
        <img
          className='cloud-2'
          src='/static/assets/gameover-won/cloud-2.svg'
        />
        <img
          className='cloud-3'
          src='/static/assets/gameover-won/cloud-3.svg'
        />
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
            z-index: 100000000000;
            width: 100%;
            height: 100%;
            background-color: #FFFE4A;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 80%;
            position: fixed;
            top: 6rem;
            color: #FF3BFF;
            text-align: center;
            margin-bottom: 3rem;
          }

          .message {
            text-align: center;
            border: 4px solid #262626;
            width: 30rem;
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

          .cloud-1{
            position:fixed;
            top: 0%;
            right: 0%;
            z-index: -5;
            width: 35%;
          }
          .cloud-2{
            position:fixed;
            top: 10%;
            left: 0%;
            z-index: -5;
            width: 40%;
          }
          .cloud-3{
            position:fixed;
            bottom: 0%;
            right: 0%;
            z-index: -5;
            width: 20%;
          }

          @media (max-width: 600px) {

            .message {
              top: 50%;
            }
            .message {
              top: 50%;
            }

            .cloud-1{
              width: 90%;
            }
            .cloud-2{
              width: 35%;
              top: 60%;
            }
            .cloud-3{
              width: 45%;
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
