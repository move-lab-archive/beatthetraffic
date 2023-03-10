import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import LevelBeginning from './instructions/LevelBeginning'
import LevelFinished from './instructions/LevelFinished'
import Gameover from './instructions/Gameover'
import Win from './instructions/Win'

class GameInstructions extends PureComponent {
  render () {
    const showLevelBeginningInstructions =
      !this.props.isPlaying && !this.props.failed && !this.props.finished

    return (
      <div
        className={`game-instructions
        ${this.props.introAnimPlayed ? '' : 'hidden'} 
        ${showLevelBeginningInstructions ? 'inside-game' : ''}
        `}
      >
        {showLevelBeginningInstructions && <LevelBeginning />}
        {!this.props.isPlaying &&
          !this.props.failed &&
          this.props.finished &&
          this.props.currentLevel < this.props.nbTotalLevel && (
            <LevelFinished />
          )}
        {!this.props.isPlaying &&
          !this.props.failed &&
          this.props.finished &&
          this.props.currentLevel === this.props.nbTotalLevel && (
            <Win url={this.props.url} />
          )}
        {!this.props.isPlaying &&
          this.props.failed && <Gameover url={this.props.url} />}
        <style jsx>{`
          .game-instructions {
            position: fixed;
            display: flex;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 6;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
            opacity: 1;
          }

          .game-instructions.inside-game {
            z-index: 4;
          }

          .hidden {
            opacity: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    isPlaying: state.game.get('isPlaying'),
    failed: state.game.get('failed'),
    finished: state.game.get('finished'),
    currentLevel: state.game.get('currentLevel'),
    nbTotalLevel: state.game.get('nbTotalLevel'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(GameInstructions)
