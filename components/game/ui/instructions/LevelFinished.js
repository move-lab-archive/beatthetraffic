import React, { Component } from 'react'
import { connect } from 'react-redux'

import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import { loadLevel } from '../../../../statemanagement/app/GameStateManagement'

class LevelFinished extends Component {
  componentDidMount () {
    SoundsManager.playSound('nextlevel')
    // The youloseloop is for now the quiet loop
    SoundsManager.playSound('youloseloop')
    this.props.dispatch(loadLevel(this.props.currentLevel + 1))
  }

  render () {
    return (
      <div className='instructions-level-finished'>
        {/* <div className='title'>CONGRAT!</div>
        <div className='message'>
          You finished level {this.props.currentLevel} with {this.props.score}{' '}
          ⭐️ !
        </div>
        <Button
          title={`Next level`}
          large
          transparent
          onClick={() =>
            this.props.dispatch(loadLevel(this.props.currentLevel + 1))
          }
        />
        <style jsx>{`
          .instructions-level-finished {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
            padding: 1rem;
          }
          .title {
            font-size: 6rem;
          }

          .message {
            text-align: center;
            margin-bottom: 1.5rem;
          }
        `}</style> */}
      </div>
    )
  }
}

export default connect(state => {
  return {
    score: state.game.get('score'),
    currentLevel: state.game.get('currentLevel')
  }
})(LevelFinished)
