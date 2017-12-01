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
            top: 1.4rem;
            left: 2.6rem;
            z-index: 5;
            transform: will-change;
            opacity: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default GameIndicators
