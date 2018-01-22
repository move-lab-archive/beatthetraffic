import React, { Component } from 'react'
import { connect } from 'react-redux'

import SmokeLevel from './indicators/SmokeLevel'
import Score from './indicators/Score'

class GameIndicators extends Component {
  render () {
    return (
      <div
        className={`game-indicators
        ${this.props.introAnimPlayed ? '' : 'hidden'}`}
      >
        <Score />
        <SmokeLevel />
        <style jsx>{`
          .game-indicators {
            position: fixed;
            top: 1.4rem;
            left: 2.8rem;
            z-index: 5;
            transform: will-change;
            opacity: 1;
            transition: opacity 0.3s;
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
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(GameIndicators)
