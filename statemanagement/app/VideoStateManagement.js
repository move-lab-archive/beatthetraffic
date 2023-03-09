import { fromJS } from 'immutable'
import SoundsManager from '../../statemanagement/app/SoundsManager'

import { levelFinished } from '../../statemanagement/app/GameStateManagement'
import { getFirstFrameImgPath } from '../../statemanagement/app/AppStateManagement'

// Initial state
const initialState = fromJS({
  src: null,
  srcHLS: null,
  isPlaying: false,
  isPaused: false,
  isReadyToPlay: false,
  isAtBeggining: true,
  firstFrameLoaded: false,
  imgFirstFrameLoaded: false,
  error: null,
  duration: null,
  currentTime: 0
})

// Actions

const SET_VIDEO_SRC = 'Video/SET_VIDEO_SRC'
const SET_VIDEO_READY = 'Video/SET_VIDEO_READY'
const SET_FIRSTFRAME_LOADED = 'Video/SET_FIRSTFRAME_LOADED'
const SET_IMG_FIRSTFRAME_LOADED = 'VIdeo/SET_IMG_FIRSTFRAME_LOADED'
const PLAY_VIDEO = 'Video/PLAY_VIDEO'
const PAUSE_VIDEO = 'Video/PAUSE_VIDEO'
const RESET_VIDEO = 'Video/RESET_VIDEO'
const UPDATE_CURRENTTIME = 'Video/UPDATE_CURRENTTIME'

export function setVideoSrc (name) {
  return {
    type: SET_VIDEO_SRC,
    payload: {
      src: "https://pub-77444c3a3f3d48a5bf389b76347b0d89.r2.dev/" + name + ".mp4",
    }
  }
}

export function setVideoReady (metadata) {
  return {
    type: SET_VIDEO_READY,
    payload: metadata
  }
}

export function imgFirstFrameLoaded () {
  return {
    type: SET_IMG_FIRSTFRAME_LOADED
  }
}

export function firstFrameLoaded () {
  return {
    type: SET_FIRSTFRAME_LOADED
  }
}

export function playVideo () {
  return {
    type: PLAY_VIDEO
  }
}

export function pauseVideo () {
  return {
    type: PAUSE_VIDEO
  }
}

export function resetVideo () {
  return {
    type: RESET_VIDEO
  }
}

export function setVideoEnded () {
  return (dispatch, getState) => {
    // Notify game that video has ended
    dispatch(levelFinished())

    dispatch({
      type: PAUSE_VIDEO
    })
  }
}

export function updateCurrentTime (time) {
  return {
    type: UPDATE_CURRENTTIME,
    payload: time
  }
}

export function prefetchImgFirstFrame (videoName) {
  return (dispatch, getState) => {
    // Only execute this code on client
    if (getState().settings.get('isServerRendering')) {
      return
    }
    // Preload firstframe with image asset
    // We start the intro animation with just
    // the first frame loaded and not necesarly the video
    const srcFirstFrame = getFirstFrameImgPath(videoName)

    let imgFirstFrame = new Image()
    imgFirstFrame.onload = () => {
      dispatch(imgFirstFrameLoaded())
    }
    imgFirstFrame.src = srcFirstFrame
  }
}

export function prefetchNextLevelFirstFrame () {
  return (dispatch, getState) => {
    const nextLevel = getState().game.get('currentLevel') + 1
    const city = getState().app.get('selectedCity')

    const nextLevelVideo = getState()
      .app.get('availableVideos')
      .find(video => {
        return video.get('city') === city && video.get('level') === nextLevel
      })

    if (nextLevelVideo) {
      dispatch(prefetchImgFirstFrame(nextLevelVideo.get('name')))
      // Preload next level sound
      SoundsManager.preloadLevelSpecific(nextLevel)
    }
  }
}

// Reducer
export default function VideoReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_VIDEO_SRC:
      return state
        .merge(initialState)
        .set('src', action.payload.src)
        .set('srcHLS', action.payload.srcHLS)
    case SET_VIDEO_READY:
      return state
        .set('isReadyToPlay', true)
        .set('duration', action.payload.duration)
    case SET_FIRSTFRAME_LOADED:
      return state.set('firstFrameLoaded', true)
    case SET_IMG_FIRSTFRAME_LOADED:
      return state.set('imgFirstFrameLoaded', true)
    case PLAY_VIDEO:
      return state.set('isPlaying', true).set('isAtBeggining', false)
    case PAUSE_VIDEO:
      return state.set('isPlaying', false)
    case RESET_VIDEO:
      return state.set('isAtBeggining', true)
    case UPDATE_CURRENTTIME:
      return state.set('currentTime', action.payload)
    default:
      return state
  }
}
