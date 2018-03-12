import { fromJS } from 'immutable'
import screenfull from 'screenfull'

// Initial state
const initialState = fromJS({
  listenersInitialized: false,
  blockCanvasScrolling: false,
  canvasScrollingPositionToRestore: {
    x: 0,
    y: 0
  },
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
const SET_CANVAS_RESOLUTION = 'Viewport/SET_CANVAS_RESOLUTION'
const SAVE_SCROLL_POSITION = 'Viewport/SAVE_SCROLL_POSITION'

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

export function scrollToPosition (position, smooth = false) {
  return (dispatch, getState) => {
    // let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    // if (isFirefox) {
    //   document.body.className = ''
    // } else {
    //   document.documentElement.className = ''
    // }
    document.body.className = ''
    // console.log('scroll to position ' + position.x)

    window.scroll({
      top: position.y,
      left: position.x,
      behavior: smooth ? 'smooth' : 'auto'
    })
    dispatch(blockCanvasScrolling())
    // dispatch(saveScrollPosition(position))
  }
}

export function saveScrollPosition (position) {
  return {
    type: SAVE_SCROLL_POSITION,
    payload: position
  }
}

export function blockCanvasScrolling () {
  return (dispatch, getState) => {
    dispatch(
      saveScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      })
    )

    // let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    // if (isFirefox) {
    //   document.body.className = 'overflow-hidden'
    // } else {
    //   document.documentElement.className = 'overflow-hidden'
    // }
    document.body.className = 'overflow-hidden'
  }
}

export function restoreCanvasScrolling (smooth = false) {
  return (dispatch, getState) => {
    const canvasScrollingPositionToRestore = getState()
      .viewport.get('canvasScrollingPositionToRestore')
      .toJS()
    dispatch(scrollToPosition(canvasScrollingPositionToRestore, smooth))
  }
}

export function setCanvasResolution (size) {
  return {
    type: SET_CANVAS_RESOLUTION,
    payload: size
  }
}

export function getCanvasResolution () {
  let innerWidth = window.innerWidth
  let innerHeight = window.innerHeight

  if (innerWidth / innerHeight < 16 / 9) {
    // Height is 100% and there is a scroll on the width
    return {
      w: innerHeight * 16 / 9,
      h: innerHeight
    }
  } else {
    // Width is 100% and there is a scroll on the height
    return {
      w: innerWidth,
      h: innerWidth * 9 / 16
    }
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

      // init canvas
      dispatch(setCanvasResolution(getCanvasResolution()))
      // TODO ADD RESIZE EVENT HANDLER AND ORIENTATION CHANGE TO SET CANVAS SIZE
    }
  }
}

export function computeVisibleArea (resolutionToMap) {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  const scrollPosition = {
    x: window.scrollX,
    y: window.scrollY
  }

  const visibleArea = {
    x: scrollPosition.x,
    w: innerWidth,
    y: scrollPosition.y,
    h: innerHeight
  }

  // Map to resolutionToMap (the video original resolution of detections)

  let width, height
  if (innerWidth / innerHeight < 16 / 9) {
    // Height is 100% and there is a scroll on the width
    width = innerHeight * resolutionToMap.w / resolutionToMap.h
    height = innerHeight
  } else {
    // Width is 100% and there is a scroll on the height
    width = innerWidth
    height = innerWidth * resolutionToMap.h / resolutionToMap.w
  }

  const visibleCanvasArea = {
    x: visibleArea.x * resolutionToMap.w / width,
    w: visibleArea.w * resolutionToMap.w / width,
    y: visibleArea.y * resolutionToMap.h / height,
    h: visibleArea.h * resolutionToMap.h / height
  }

  return visibleCanvasArea
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
    case SAVE_SCROLL_POSITION:
      return state.set(
        'canvasScrollingPositionToRestore',
        fromJS(action.payload)
      )
    case SET_CANVAS_RESOLUTION:
      return state.set('canvasResolution', fromJS(action.payload))
    default:
      return state
  }
}
