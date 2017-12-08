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
        <div className='message'>You scored {this.props.score} ⭐️</div>
        <Button
          title={`Save your score`}
          onClick={this.handleDisplaySaveScoreModal}
        />
        <Button
          title={`Play again`}
          onClick={() => this.props.dispatch(retry())}
        />
        {this.state.displaySaveScoreModal && (
          <SaveScoreModal onClose={this.handleHideSaveScoreModal} />
        )}
        <style jsx>{`
          .instructions-win {
            position: relative;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 5rem;
            background-color: #262626;
          }
          .title {
            font-size: 6rem;
            color: #5bff86;
            text-align: center;
            margin-bottom: 3rem;
          }

          .message {
            text-align: center;
            margin-bottom: 2rem;
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
