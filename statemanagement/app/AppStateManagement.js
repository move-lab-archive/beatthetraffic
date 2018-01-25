import { fromJS } from 'immutable'

import { fetchRawDetections } from './RawDetectionsStateManagement'
import { fetchObjectTracker } from './ObjectTrackerStateManagement'
import {
  setVideoSrc,
  pauseVideo,
  playVideo,
  prefetchImgFirstFrame
} from './VideoStateManagement'
import { turnSoundOn, turnSoundOff } from './SettingsStateManagement'

import GameConfig from '../../gameconfig.json'

// Initial state
const initialState = fromJS({
  availableCities: GameConfig.availableCities,
  selectedCity: GameConfig.defaultSelectedCity,
  selectedVideo: GameConfig.defaultSelectedVideo,
  availableVideos: GameConfig.availableVideos,
  showMenu: false,
  playOnHideMenu: false,
  unmuteOnHideMenu: false,
  introAnimPlayed: false
})

// Actions
const SELECT_VIDEO = 'App/SELECT_VIDEO'
const SELECT_CITY = 'App/SELECT_CITY'
const SHOW_MENU = 'App/SHOW_MENU'
const HIDE_MENU = 'App/HIDE_MENU'
const PLAY_ON_HIDE_MENU = 'App/PLAY_ON_HIDE_MENU'
const UNMUTE_ON_HIDE_MENU = 'App/UNMUTE_ON_HIDE_MENU'
const KEEP_MUTED_ON_HIDE_MENU = 'App/KEEP_MUTED_ON_HIDE_MENU'
const SET_INTROANIM_PLAYED = 'App/SET_INTROANIM_PLAYED'

let pathStatic = '/static/levels'

export function getRawDetectionPath (videoName) {
  return `${pathStatic}/${videoName}/rawdetections.txt`
}

export function getTrackerDataPath (videoName) {
  return `${pathStatic}/${videoName}/tracker.json`
}

export function getAverageImgPath (videoName) {
  return `${pathStatic}/${videoName}/average-1280.jpg`
}

export function getFirstFrameImgPath (videoName) {
  return `${pathStatic}/${videoName}/firstframe.jpg`
}

export function setIntroAnimPlayed () {
  return {
    type: SET_INTROANIM_PLAYED
  }
}

export function showMenu () {
  return (dispatch, getState) => {
    if (getState().video.get('isPlaying')) {
      // Pause video / game
      dispatch(pauseVideo())
      // Set resume video on hide menu
      dispatch({
        type: PLAY_ON_HIDE_MENU
      })
    }

    if (getState().settings.get('soundEnabled')) {
      // Mute sounds
      dispatch(turnSoundOff())
      // Set unmute sound on hide menu
      dispatch({
        type: UNMUTE_ON_HIDE_MENU
      })
    } else {
      dispatch({
        type: KEEP_MUTED_ON_HIDE_MENU
      })
    }

    dispatch({
      type: SHOW_MENU
    })
  }
}

export function hideMenu () {
  return (dispatch, getState) => {
    if (getState().app.get('playOnHideMenu')) {
      //  Unpause video / game
      dispatch(playVideo())
    }

    if (getState().app.get('unmuteOnHideMenu')) {
      dispatch(turnSoundOn())
    }

    dispatch({
      type: HIDE_MENU
    })
  }
}

export function selectCity (name) {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_CITY,
      payload: name
    })

    // Maybe here there will be assets to pre-load
    // but beware of the SSR, look at selectVideo()
  }
}

export function selectVideoForLevel (level) {
  return (dispatch, getState) => {
    // console.log(level)

    const city = getState().app.get('selectedCity')

    const videoToSelect = getState()
      .app.get('availableVideos')
      .find(video => {
        return video.get('city') === city && video.get('level') === level
      })

    dispatch(selectVideo(videoToSelect.get('name')))
    dispatch(prefetchImgFirstFrame(videoToSelect.get('name')))
  }
}

export function selectVideo (name) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: SELECT_VIDEO,
        payload: name
      })

      const videoSelected = getState()
        .app.get('availableVideos')
        .find(video => {
          return video.get('name') === name
        })

      // Set video src
      dispatch(setVideoSrc(videoSelected.getIn(['sources', 'hd'])))

      // Fetch detection and object tracking data associated with the video
      // WARN: it executes only on client, we don't want to await for this MBs of data
      //       and include when in the bundle with the app on SSR
      if (!getState().settings.get('isServerRendering')) {
        dispatch(
          fetchRawDetections(getRawDetectionPath(videoSelected.get('name')))
        )
        dispatch(
          fetchObjectTracker(getTrackerDataPath(videoSelected.get('name')))
        )
      }
    })
  }
}

// This action is only executed on first load when we render the javascript on the client
// It fetchs things that aren't included in the pre-ssr-render
export function fetchRemainingData () {
  return (dispatch, getState) => {
    const videoSelectedName = getState().app.get('selectedVideo')
    dispatch(prefetchImgFirstFrame(videoSelectedName))
    // Do not load raw detections in prod
    if (process.env.NODE_ENV !== 'production') {
      dispatch(fetchRawDetections(getRawDetectionPath(videoSelectedName)))
    }
    dispatch(fetchObjectTracker(getTrackerDataPath(videoSelectedName)))
  }
}

// Reducer
export default function AppReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_VIDEO:
      return state.set('selectedVideo', action.payload)
    case SELECT_CITY:
      return state.set('selectedCity', action.payload)
    case SHOW_MENU:
      return state.set('showMenu', true)
    case HIDE_MENU:
      return state.set('showMenu', false).set('playOnHideMenu', false)
    case PLAY_ON_HIDE_MENU:
      return state.set('playOnHideMenu', true)
    case UNMUTE_ON_HIDE_MENU:
      return state.set('unmuteOnHideMenu', true)
    case KEEP_MUTED_ON_HIDE_MENU:
      return state.set('unmuteOnHideMenu', false)
    case SET_INTROANIM_PLAYED:
      return state.set('introAnimPlayed', true)
    default:
      return state
  }
}
