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
    return <div className='instructions-level-finished' />
  }
}

export default connect(state => {
  return {
    currentLevel: state.game.get('currentLevel')
  }
})(LevelFinished)
