import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SoundsManager from '../../../../statemanagement/app/SoundsManager'

class SmokeLevel extends PureComponent {
  componentWillReceiveProps (nextProps) {
    const nextSmokePercentage = nextProps.nbMissed * 100 / nextProps.maxMissed
    const currentSmokePercentage =
      this.props.nbMissed * 100 / this.props.maxMissed

    if (nextSmokePercentage >= 50 && currentSmokePercentage < 50) {
      // Speed up sound when smoke is superior to 50% for the first time
      console.log('Speed up sound')
      // todo transition ?
      SoundsManager.changePlaybackRate(
        `main_level${this.props.currentLevel}`,
        1.2
      )
    }

    if (nextSmokePercentage >= 80 && currentSmokePercentage < 80) {
      // Trigger alert playing when smoke is superior to 80% for the first time
      console.log('Play alert sound')
      SoundsManager.playSound('transition-normal-alert')
      SoundsManager.playSound('alert')
    }
  }

  getFillColor () {
    const smokePercentage = this.props.nbMissed * 100 / this.props.maxMissed
    let smokeFillColor

    if (smokePercentage < 50) {
      smokeFillColor = '#5BFF86'
    } else if (smokePercentage < 80) {
      smokeFillColor = '#FF9E00'
    } else {
      smokeFillColor = '#FF0000'
    }

    return smokeFillColor
  }

  render () {
    const smokePercentage = this.props.nbMissed * 100 / this.props.maxMissed

    return (
      <svg
        viewBox='0 0 72 25'
        xmlns='http://www.w3.org/2000/svg'
        className={`smoke-bar ${
          smokePercentage >= 80 ? 'smoke-bar-alarm-anim' : ''
        }`}
      >
        <g id='Page-1' fill='none' fillRule='evenodd'>
          <path
            d='M62 0v8.6L72 0v25H31V9.2l10.3-9V9l10.3-9-.3 9L62 0zM20.6 9L31 0v25H0V9.2l10.3-9V9l10.3-9v9z'
            id='bg'
            fill='#262626'
          />
          <path
            d='M62 0v8.6L72 0v25H31V9.2l10.3-9V9l10.3-9-.3 9L62 0zM20.6 9L31 0v25H0V9.2l10.3-9V9l10.3-9v9z'
            id='progress'
            fill={this.getFillColor()}
            clipPath='url(#progressClip)'
          />
          <defs>
            <clipPath id='progressClip'>
              <rect
                x='0'
                y='0'
                width={this.props.nbMissed * 72 / this.props.maxMissed}
                height='25'
              />
            </clipPath>
          </defs>
        </g>
        <style jsx>{`
          .smoke-bar {
            margin-top: 0.5rem;
            width: 8.5rem;
            height: auto;
          }

          .smoke-bar-alarm-anim {
            animation-name: bounce;
            animation-duration: 0.5s;
            animation-iteration-count: infinite;
          }

          @keyframes bounce {
            0% {
              transform: scale(1);
            }

            20% {
              transform: scale(0.9);
            }

            80% {
              transform: scale(1.1);
            }

            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </svg>
    )
  }
}

export default connect(state => {
  return {
    score: state.game.get('score'),
    nbMissed: state.game.get('missedItems').size,
    maxMissed: state.game.get('maxMissed'),
    currentLevel: state.game.get('currentLevel')
  }
})(SmokeLevel)