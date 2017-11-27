import { fromJS } from 'immutable'
import screenfull from 'screenfull'

// Initial state
const initialState = fromJS({
  listenersInitialized: false,
  deviceOrientation: 'none',
  isFullscreen: false,
  isFullscreenAvailable: false,
  canvasResolution: {
    w: 1280,
    h: 720
  }
})

// Actions
const SET_PORTRAIT = 'Viewport/SET_PORTRAIT'
const SET_LANDSCAPE = 'Viewport/SET_LANDSCAPE'
const INIT_LISTENERS = 'Viewport/INIT_LISTENERS'
const SET_FULLSCREEN_STATUS = 'Viewport/SET_FULLSCREEN_STATUS'
const SET_FULLSCREEN_AVAILABLE = 'Viewport/SET_FULLSCREEN_AVAILABLE'

export function handleOrientationChange (dispatch) {
  // console.log(window.orientation)
  if (window.orientation === -90 || window.orientation === 90) {
    // console.log('landscape')
    dispatch(setLandscape())
    // Scroll to bottom ?
    window.scrollTo(0, document.body.scrollHeight)
  } else if (window.orientation !== undefined) {
    // console.log('portrait')
    dispatch(setPortrait())
  }
}

export function handleFullScreenChange (dispatch) {
  if (screenfull.isFullscreen) {
    // console.log('entering fullscreen')
    dispatch(setFullScreenStatus(true))
  } else {
    // console.log('leaving fullscreen')
    dispatch(setFullScreenStatus(false))
  }
}

export function initViewportListeners () {
  return (dispatch, getState) => {
    // Only if not initialized
    if (!getState().viewport.get('listenersInitialized')) {
      dispatch({
        type: INIT_LISTENERS
      })
      // console.log('init orientation change listener')
      window.addEventListener(
        'orientationchange',
        handleOrientationChange.bind(this, dispatch)
      )
      handleOrientationChange(dispatch)
      if (screenfull.enabled) {
        // console.log('init fullscreen listener')
        screenfull.on('change', handleFullScreenChange.bind(this, dispatch))
        dispatch(setFullscreenAvailable())
      }
    }
  }
}

export function setLandscape () {
  return {
    type: SET_LANDSCAPE
  }
}

export function setPortrait () {
  return {
    type: SET_PORTRAIT
  }
}

export function setFullscreenAvailable () {
  return {
    type: SET_FULLSCREEN_AVAILABLE
  }
}

export function setFullScreenStatus (status) {
  return {
    type: SET_FULLSCREEN_STATUS,
    payload: status
  }
}

// Reducer
export default function ViewportStateManagement (
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case SET_LANDSCAPE:
      return state.set('deviceOrientation', 'landscape')
    case SET_PORTRAIT:
      return state.set('deviceOrientation', 'portrait')
    case INIT_LISTENERS:
      return state.set('listenersInitialized', true)
    case SET_FULLSCREEN_STATUS:
      return state.set('isFullscreen', action.payload)
    case SET_FULLSCREEN_AVAILABLE:
      return state.set('isFullscreenAvailable', true)
    default:
      return state
  }
}
