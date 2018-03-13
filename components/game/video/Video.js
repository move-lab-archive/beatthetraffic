import React, { Component } from 'react'
import { connect } from 'react-redux'
import raf from 'raf'

import {
  setVideoReady,
  setVideoEnded,
  firstFrameLoaded,
  prefetchNextLevelFirstFrame
} from '../../../statemanagement/app/VideoStateManagement'

import { getFirstFrameImgPath } from '../../../statemanagement/app/AppStateManagement'

import {
  scrollToPosition,
  blockCanvasScrolling,
  scrollToVisiblePart
} from '../../../statemanagement/app/ViewportStateManagement'

import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'
import Loading from '../../shared/Loading'

class Video extends Component {
  constructor (props) {
    super(props)
    this.monitorFrames = this.monitorFrames.bind(this)
    this.registerListeners = this.registerListeners.bind(this)
    this.cleanListeners = this.cleanListeners.bind(this)
    this.handleCanPlay = this.handleCanPlay.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleEnded = this.handleEnded.bind(this)
    this.handleFirstFrameLoaded = this.handleFirstFrameLoaded.bind(this)
    this.handleBuffering = this.handleBuffering.bind(this)
    this.handleFinishBuffering = this.handleFinishBuffering.bind(this)
    this.isMonitoring = false
    this.lastCurrentTime = 0
    this.videoEl = null
    this.videoSrc = ''

    this.state = {
      canRenderVideo: false,
      isBuffering: false
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    // We want to re-render the video item if the firstFrameLoaded has loaded
    // to mask the first frame image trick
    if (
      nextProps.src !== this.props.src ||
      nextState.canRenderVideo !== this.state.canRenderVideo
    ) {
      // We want to re-render the video item if the src has changed
      return true
    } else if (
      nextProps.firstFrameLoaded !== this.props.firstFrameLoaded ||
      nextState.isBuffering !== this.state.isBuffering
    ) {
      return true
    } else {
      return false
    }
  }

  componentWillReceiveProps (newProps) {
    if (!this.videoEl) {
      // console.log('Video element ref not defined')
      return
    }
    // Pilot videoEl from the props changes
    if (
      this.props.isPlaying !== newProps.isPlaying &&
      newProps.isPlaying === true
    ) {
      // console.log('play item')
      this.videoEl.play()
    }

    if (
      this.props.isPlaying !== newProps.isPlaying &&
      newProps.isPlaying === false
    ) {
      this.videoEl.pause()
    }

    if (this.props.isAtBeggining !== newProps.isAtBeggining) {
      this.videoEl.currentTime = 0
      this.nextLevelFirstFramePrefetched = false
    }
  }

  handleCanPlay () {
    // console.log('video can play')
    this.props.dispatch(
      setVideoReady({
        duration: this.videoEl.duration
      })
    )
    // Cancel autoplay
    // we set autoplay as a hack because safari mobile doesn't allow
    // to play without user even if not (so we autoplay-pause, then play)
    if (!this.props.isPlaying) {
      this.videoEl.pause()
    }
  }

  handlePlay () {
    // If not already monitoring
    if (!this.isMonitoring) {
      // console.log('Start monitoring frames')
      this.isMonitoring = true
      this.monitorFrames()
    }
  }

  handlePause () {
    // console.log('video paused')
  }

  handleEnded () {
    // console.log('video ended')
    this.props.dispatch(setVideoEnded())
  }

  handleFirstFrameLoaded () {
    // console.log('first frame loaded')
    setTimeout(() => {
      this.props.dispatch(firstFrameLoaded())
    }, 500)
  }

  handleBuffering () {
    this.setState({
      isBuffering: true
    })
  }

  handleFinishBuffering () {
    this.setState({
      isBuffering: false
    })
  }

  cleanListeners (el) {
    // console.log('Clean previous listeners')
    el.removeEventListener('canplay', this.handleCanPlay)
    el.removeEventListener('play', this.handlePlay)
    el.removeEventListener('pause', this.handlePause)
    el.removeEventListener('ended', this.handleEnded)
    el.removeEventListener('loadeddata', this.handleFirstFrameLoaded)
    el.removeEventListener('waiting', this.handleBuffering)
    el.removeEventListener('playing', this.handleFinishBuffering)
  }

  registerListeners (el, src) {
    // console.log('register liteners')
    if (el && this.videoSrc !== src) {
      this.props.dispatch(scrollToVisiblePart())
      // console.log('actually registering listeners')
      this.videoEl = el
      this.videoSrc = src
      // Clean previous listeners
      this.cleanListeners(this.videoEl)

      if (this.props.playbackRate) {
        this.videoEl.playbackRate = this.props.playbackRate
      }

      // console.log('registerListeners')

      // In case the video is already ready
      if (this.videoEl.readyState > 3) {
        this.handleCanPlay()
      }

      this.videoEl.addEventListener('canplay', this.handleCanPlay)
      this.videoEl.addEventListener('play', this.handlePlay)
      this.videoEl.addEventListener('pause', this.handlePause)
      this.videoEl.addEventListener('ended', this.handleEnded)
      this.videoEl.addEventListener('loadeddata', this.handleFirstFrameLoaded)
      this.videoEl.addEventListener('waiting', this.handleBuffering)
      this.videoEl.addEventListener('playing', this.handleFinishBuffering)
    }
  }

  monitorFrames () {
    if (!this.props.isPlaying || this.isMonitoring === false) {
      // console.log('cancel monitoring')
      this.isMonitoring = false
      return
    }
    let newCurrentFrame = Math.round(
      this.videoEl.currentTime * this.props.videoFPS
    )
    if (GameEngineStateManager.getCurrentFrame() !== newCurrentFrame) {
      GameEngineStateManager.setCurrentFrame(newCurrentFrame)
      GameEngineStateManager.setCurrentTime(this.videoEl.currentTime)

      // Sometimes the playing event doesn't fire so here we can cancel buffering
      if (this.state.isBuffering) {
        this.handleFinishBuffering()
      }

      // Debug method to end the level 1 sooner to work on the level 1 -> level 2 transition
      // OR to work on YOU WON, you can load http://localhost:3000/stuttgart1/level/3
      // ex: end the level 50s before it finishes
      // if (this.props.duration - this.videoEl.currentTime < 45) {
      //   this.handleEnded()
      // }

      // If currentTime is 10s before end of video, prefetch next level first frame
      if (
        !this.nextLevelFirstFramePrefetched &&
        this.props.duration - this.videoEl.currentTime < 10
      ) {
        this.nextLevelFirstFramePrefetched = true
        this.props.dispatch(prefetchNextLevelFirstFrame())
      }
    }
    raf(this.monitorFrames)
  }

  componentWillUnmount () {
    if (this.videoEl) {
      this.cleanListeners(this.videoEl)
    }
  }

  componentDidMount () {
    this.setState({
      canRenderVideo: true,
      isMobileSafari: /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(
        navigator.userAgent
      )
    })
  }

  render () {
    return (
      <div className='video-container'>
        <img
          className={`img-firstframe ${
            this.props.firstFrameLoaded ? 'hidden' : ''
          }`}
          src={this.props.srcFirstFrame}
        />
        {this.props.isPlaying &&
          this.state.isBuffering && (
            <div className='buffering'>
              <Loading />
            </div>
          )}
        {this.props.src &&
          this.state.canRenderVideo && (
            <video
              key={this.props.src}
              ref={el => {
                this.registerListeners(el, this.props.src)
              }}
              className='video'
              muted
              playsInline
              autoPlay
            >
              {this.props.srcHLS &&
                this.state.isMobileSafari && (
                  <source
                    src={`${this.props.srcHLS}`}
                    type='application/x-mpegURL'
                  />
                )}
              <source src={`${this.props.src}`} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        <style jsx>{`
          .buffering {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            bottom: 0;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.8);
          }

          .img-firstframe {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }

          .video {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
          }

          .hidden {
            visibility: hidden;
          }

          .video-container {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
          }

          @media (min-aspect-ratio: 16/9) {
            .video,
            .img-firstframe {
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .video,
            .img-firstframe {
              width: auto;
              height: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  const selectedVideo = state.app.get('availableVideos').find(video => {
    return video.get('name') === state.app.get('selectedVideo')
  })

  return {
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    src: state.video.get('src'),
    srcHLS: state.video.get('srcHLS'),
    currentTime: state.video.get('currentTime'),
    duration: state.video.get('duration'),
    videoFPS: selectedVideo.get('videoFPS'),
    playbackRate: selectedVideo.get('playbackRate'),
    firstFrameLoaded: state.video.get('firstFrameLoaded'),
    srcFirstFrame: getFirstFrameImgPath(selectedVideo.get('name'))
  }
})(Video)
