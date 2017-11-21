import React, { Component } from 'react'

import SmokeLevel from './indicators/SmokeLevel'
import Score from './indicators/Score'

class GameIndicators extends Component {
  render () {
    return (
      <div className='game-indicators'>
        <Score />
        <SmokeLevel />
        <style jsx>{`
          .game-indicators {
            position: fixed;
            top: 3rem;
            left: 3rem;
            z-index: 5;
            transform: will-change;
          }
        `}</style>
      </div>
    )
  }
}

export default GameIndicators
