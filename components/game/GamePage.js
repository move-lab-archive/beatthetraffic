import React from 'react'
import { connect } from 'react-redux'

import Video from './video/Video'
import GameEngine from './engine/GameEngine'
import Sound from './ui/Sound'
import GameIndicators from './ui/GameIndicators'
import GameInstructions from './ui/GameInstructions'
import GameProgressBar from './ui/GameProgressBar'
import LevelName from './ui/LevelName'
import Landing from './ui/Landing'
import SVGMasking from './masking/SVGMasking'

import SettingsControl from '../shared/SettingsControl'

import { setClientRendering } from '../../statemanagement/app/SettingsStateManagement'

import { fetchRemainingData } from '../../statemanagement/app/AppStateManagement'

import { updateUrlToMatchLevelAndCity } from '../../statemanagement/app/GameStateManagement'

import { initViewportListeners } from '../../statemanagement/app/ViewportStateManagement'

import SoundsManager from '../../statemanagement/app/SoundsManager'
import GameTempStateManager from '../../statemanagement/app/GameTempStateManager'

class GamePage extends React.Component {
  constructor (props) {
    super(props)

    this.recordClick = this.recordClick.bind(this)

    this.state = {
      clientSide: false,
      landingAnimFinished: false
    }
  }

  componentDidMount () {
    require('smoothscroll-polyfill').polyfill()
    this.props.dispatch(setClientRendering())
    this.setState({ clientSide: true })
    this.props.dispatch(initViewportListeners())
    this.initClickRecorder()

    // Load client side things
    this.props.dispatch(fetchRemainingData())
    this.props.dispatch(updateUrlToMatchLevelAndCity())

    if (this.props.levelNb === 1) {
      // Trick because the landing animation run without javascript so we have
      // no event to know when it finishes

      const timeSinceFirstPaint =
        (new Date().getTime() - window.firstPaint) / 1000
      console.log(`timeSinceFirstPaint ${timeSinceFirstPaint}s`)
      const timeRemainingOnLandingAnimation = 4 - timeSinceFirstPaint
      // TODO HIDE ONLY IS VIDEO FIRST FRAME IS LOADED
      if (timeRemainingOnLandingAnimation > 0) {
        setTimeout(() => {
          this.hideLanding()
        }, timeRemainingOnLandingAnimation * 1000)
      } else {
        // directly hide it
        this.hideLanding()
      }
    }
  }

  componentWillUnmount () {
    this.cleanClickRecorder()
  }

  hideLanding () {
    // reset scroll
    window.scroll(0, 0)
    // hide landing
    this.setState({
      landingAnimFinished: true
    })
    // scroll animation
    setTimeout(() => {
      window.scroll({
        top: this.props.videoMobileOffset.y,
        left: this.props.videoMobileOffset.x,
        behavior: 'smooth'
      })
    }, 500)
    // Play intro sound
    SoundsManager.playSound('intro')
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

    // A bit hacky
    // Ignore Chrome mobile touchstart event
    // we detect touchstart for safari compat
    if (coordinates.x === undefined) {
      return
    }

    let width, height

    // Map coordinates to canvas coordinates
    if (window.innerWidth / window.innerHeight < 16 / 9) {
      width = window.innerHeight * canvas.w / canvas.h
      height = window.innerHeight
    } else {
      width = window.innerWidth
      height = window.innerWidth * canvas.h / canvas.w
    }

    coordinates = {
      x: coordinates.x * canvas.w / width,
      y: coordinates.y * canvas.h / height
    }

    GameTempStateManager.recordClickOrTouch(coordinates)
  }

  render () {
    return (
      <div className='landing-page'>
        {process.env.NODE_ENV !== 'production' && <SettingsControl />}
        {this.props.levelNb === 1 &&
          !this.state.landingAnimFinished && <Landing />}
        {/*
          we Do that to priorize image loading from landing
          but what about having SSR for other pages like about, level2... ?
          -> level 2 no need because never loaded directly
          -> about will have its top level page..
        */}
        {this.state.clientSide && (
          <div>
            {!this.props.isGamePlaying && <GameInstructions />}
            <GameIndicators />
            <GameEngine />
            <Sound />
            <SVGMasking />
            <Video />
            <LevelName />
            <GameProgressBar />
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
    videoMobileOffset: selectedVideo.get('videoMobileOffset').toJS(),
    canvasResolution: state.viewport.get('canvasResolution').toJS()
  }
})(GamePage)
