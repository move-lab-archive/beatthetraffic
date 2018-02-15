import React from 'react'
import { connect } from 'react-redux'

import Video from './video/Video'
import GameEngine from './core/GameEngine'
import Sound from './ui/Sound'
import GameIndicators from './ui/GameIndicators'
import GameInstructions from './ui/GameInstructions'
import GameProgressBar from './ui/GameProgressBar'
import LevelName from './ui/LevelName'
import Landing from './ui/Landing'
import Intro from './ui/Intro'
import Menu from './ui/menu/Menu'
import MenuBtn from './ui/menu/MenuBtn'
import SVGMasking from './masking/SVGMasking'

import SettingsControl from '../shared/SettingsControl'

import { setClientRendering } from '../../statemanagement/app/SettingsStateManagement'

import {
  fetchRemainingData,
  setIntroAnimPlayed
} from '../../statemanagement/app/AppStateManagement'

import {
  updateUrlToMatchLevelAndCity,
  startLevel
} from '../../statemanagement/app/GameStateManagement'

import { playVideo } from '../../statemanagement/app/VideoStateManagement'

import { initViewportListeners } from '../../statemanagement/app/ViewportStateManagement'

import SoundsManager from '../../statemanagement/app/SoundsManager'
import GameEngineStateManager from '../../statemanagement/app/GameEngineStateManager'
import CityPicker from '../shared/CityPicker'

class GamePage extends React.Component {
  constructor (props) {
    super(props)

    this.recordClick = this.recordClick.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleFinishIntro = this.handleFinishIntro.bind(this)

    this.state = {
      clientSide: false,
      showLanding: true,
      showIntro: false,
      playIntroAnim: !props.introAnimPlayed
    }
  }

  componentDidMount () {
    require('smoothscroll-polyfill').polyfill()
    this.props.dispatch(initViewportListeners())
    this.props.dispatch(setClientRendering())
    this.setState({ clientSide: true })
    this.initClickRecorder()

    // Load client side things
    this.props.dispatch(fetchRemainingData())
    this.props.dispatch(updateUrlToMatchLevelAndCity())

    // Preload game sounds
    // TODO IMPROVE ONLY LEVEL 1 SOUNDS
    SoundsManager.preloadGameSounds()

    if (this.props.introAnimPlayed) {
      this.setState({
        playIntroAnim: false
      })
    }
  }

  componentWillUnmount () {
    this.cleanClickRecorder()
  }

  initClickRecorder () {
    window.document.body.addEventListener('click', this.recordClick)
    window.document.body.addEventListener('touchstart', this.recordClick)
  }

  cleanClickRecorder () {
    window.document.body.removeEventListener('click', this.recordClick)
  }

  recordClick (event) {
    let coordinates = {
      x: event.pageX,
      y: event.pageY
    }

    const canvas = this.props.canvasResolution

    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    // A bit hacky
    // Ignore Chrome mobile touchstart event
    // we detect touchstart for safari compat
    if (coordinates.x === undefined) {
      return
    }

    let width, height

    // Map coordinates to canvas coordinates
    if (innerWidth / innerHeight < 16 / 9) {
      width = innerHeight * canvas.w / canvas.h
      height = innerHeight
    } else {
      width = innerWidth
      height = innerWidth * canvas.h / canvas.w
    }

    coordinates = {
      x: coordinates.x * canvas.w / width,
      y: coordinates.y * canvas.h / height
    }

    GameEngineStateManager.recordClickOrTouch(coordinates)
  }

  handleStart (delayHideLanding) {
    if (this.state.playIntroAnim) {
      this.props.dispatch(playVideo())
      if (delayHideLanding) {
        this.setState({
          showIntro: true
        })
        setTimeout(() => {
          this.setState({
            showLanding: false
          })
        }, delayHideLanding * 1000)
      } else {
        this.setState({
          showIntro: true,
          showLanding: false
        })
      }
    } else {
      this.setState({
        showIntro: false,
        showLanding: false
      })
    }
  }

  handleFinishIntro (delayHideIntro) {
    if (delayHideIntro) {
      this.setState({
        showLanding: false,
        playIntroAnim: false
      })

      setTimeout(() => {
        this.setState({
          showIntro: false
        })
      }, delayHideIntro * 1000)
    } else {
      this.setState({
        showIntro: false,
        showLanding: false,
        playIntroAnim: false
      })
    }

    this.props.dispatch(startLevel())
    this.props.dispatch(setIntroAnimPlayed())
  }

  render () {
    return (
      <div className='main-page'>
        {this.state.showLanding && <Landing handleStart={this.handleStart} />}
        {this.state.showIntro && <Intro onFinish={this.handleFinishIntro} />}
        {this.state.clientSide && (
          <div>
            {!this.props.isGamePlaying &&
              !this.state.showIntro && <GameInstructions />}
            {process.env.NODE_ENV !== 'production' && <SettingsControl />}
            <GameIndicators />
            <GameEngine />
            <Sound />
            <SVGMasking />
            <Video />
            <LevelName />
            <GameProgressBar />
            <MenuBtn />
            <Menu url={this.props.url} />
            <CityPicker />
          </div>
        )}
      </div>
    )
  }
}

export default connect(state => {
  const selectedVideo = state.app.get('availableVideos').find(video => {
    return video.get('name') === state.app.get('selectedVideo')
  })

  return {
    isGamePlaying: state.game.get('isPlaying'),
    levelNb: selectedVideo.get('level'),
    canvasResolution: state.viewport.get('canvasResolution').toJS(),
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(GamePage)
