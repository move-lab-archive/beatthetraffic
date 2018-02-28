import React, { Component } from 'react'
import { connect } from 'react-redux'
import screenfull from 'screenfull'

import ButtonLevelBeginning from '../../../shared/ButtonLevelBeginning'
import Loading from '../../../shared/Loading'
import AskLandscapeAnimation from '../../../shared/AskLandscapeAnimation'

import { startLevel } from '../../../../statemanagement/app/GameStateManagement'

class LevelBeginning extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timerAutoStart: 5,
      displayCongratsMsg: props.currentLevel >= 2
    }
  }

  componentWillReceiveProps (newProps) {
    // Auto play on level loading finished
    if (
      this.props.isGameReadyToPlay === false &&
      newProps.isGameReadyToPlay === true &&
      this.props.introAnimPlayed === true
    ) {
      // console.log('Start countdown 5s to start level')
      this.startCountDown()
    }
  }

  componentDidMount () {
    // Auto play on reset from gameover
    if (
      this.props.isGameReadyToPlay === true &&
      this.props.gameFailed === false &&
      this.props.introAnimPlayed === true
    ) {
      // console.log('Start countdown 5s to start level')
      this.startCountDown()
    }

    if (this.state.displayCongratsMsg) {
      // Hide congrats msg after a few seconds
      setTimeout(() => {
        this.setState({
          displayCongratsMsg: false
        })
      }, 3000)
    }
  }

  componentWillUnmount () {
    if (this.refSetIntervalAutoStart) {
      clearInterval(this.refSetIntervalAutoStart)
    }
  }

  startCountDown () {
    this.refSetIntervalAutoStart = setInterval(() => {
      if (this.state.timerAutoStart - 1 === 0) {
        this.props.dispatch(startLevel())
        clearInterval(this.refSetIntervalAutoStart)
      } else {
        this.setState({
          timerAutoStart: this.state.timerAutoStart - 1
        })
      }
    }, 1000)
  }

  manualStart () {
    this.props.dispatch(startLevel())
    clearInterval(this.refSetIntervalAutoStart)
  }

  render () {
    return (
      <div className='instructions-level-beginning'>
        {/* See in componentDidMount the timing for the msg */}
        {/* NOTE for @mmmm , when you will style that part, you can have a look in Video.js line 164 😉 */}
        {this.state.displayCongratsMsg && (
          <div className='level-title'>
            <h1>CONGRATS</h1>
          </div>
        )}
        {!this.state.displayCongratsMsg && (
          <div className='level-title'>
            <h1>LEVEL {this.props.currentLevel}</h1>
          </div>
        )}
        {/* {!this.state.displayCongratsMsg &&
          this.props.currentLevel >= 2 && (
            <div className='level-help'>
              {this.props.deviceOrientation === 'portrait' && (
                <div>
                  <AskLandscapeAnimation />
                </div>
              )}
              {this.props.deviceOrientation !== 'portrait' &&
                this.props.isFullscreenAvailable &&
                !this.props.isFullscreen && (
                  <div>
                    <p>TIP: This level is easier in fullscreen</p>
                    <Button
                      onClick={() => screenfull.request()}
                      title='Enter Fullscreen'
                      transparent
                    />
                  </div>
                )}
            </div>
          )} */}
        {this.props.isGameReadyToPlay && (
          <ButtonLevelBeginning
            onClick={() => this.manualStart()}
            title={`Game starts in ${this.state.timerAutoStart}s`}
          />
        )}
        {!this.props.isGameReadyToPlay && <Loading />}
        <style jsx>{`
          .instructions-level-beginning {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(38, 38, 38, 0.7);
          }
          .instructions-level-beginning .level-title {
            color: white;
            margin-top: -5rem;
          }

          .level-help {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  const isGameReadyToPlay =
    state.objectTracker.get('fetched') && state.video.get('isReadyToPlay')

  return {
    isGameReadyToPlay,
    deviceOrientation: state.viewport.get('deviceOrientation'),
    isFullscreenAvailable: state.viewport.get('isFullscreenAvailable'),
    isFullscreen: state.viewport.get('isFullscreen'),
    currentLevel: state.game.get('currentLevel'),
    introAnimPlayed: state.app.get('introAnimPlayed'),
    gameFailed: state.game.get('failed')
  }
})(LevelBeginning)
