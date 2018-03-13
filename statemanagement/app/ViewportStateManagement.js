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
  },
  viewportSize: {
    w: 0,
    h: 0
  }
})

let resizeDebounceTimeout = null;

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
  } else if (window.orientation !== undefined) {
    dispatch(setPortrait())
  }
  dispatch(scrollToVisiblePart())
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

export function scrollToPosition (position, isGame = false) {
  return (dispatch, getState) => {
    let isMobileSafari = /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(
      navigator.userAgent
    )
    if (!isMobileSafari) {
      document.body.className = ''
    } else {
      document.documentElement.className = ''
    }

    window.scroll({
      top: position.y,
      left: position.x,
      behavior: 'auto'
    })
    // TODO if mobile portrait, block canvas scroll, otherwise, let user scroll
    dispatch(blockCanvasScrolling(isGame))
    // dispatch(saveScrollPosition(position))
  }
}

export function saveScrollPosition (position) {
  return {
    type: SAVE_SCROLL_POSITION,
    payload: position
  }
}

export function blockCanvasScrolling (isGame = false) {
  return (dispatch, getState) => {
    dispatch(
      saveScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      })
    )

    let isMobileSafari = /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(
      navigator.userAgent
    )
    if (!isMobileSafari) {
      document.body.className = 'overflow-hidden'
    } else {
      if (!isGame) {
        // For pages (don't need to keep the body/html position) and we want:
        // to be able to scroll inside the page
        document.documentElement.className = 'overflow-hidden'
        // Restore the touch event hack
        document.ontouchmove = function (e) {
          return true
        }
      } else {
        // For game:
        // Totally prevent scrolling without setting overflow hidden
        // because Safari Mobile wouldn't keep the current scroll position
        document.ontouchmove = function (e) {
          e.preventDefault()
        }
      }
    }
  }
}

export function restoreCanvasScrolling () {
  return (dispatch, getState) => {
    const canvasScrollingPositionToRestore = getState()
      .viewport.get('canvasScrollingPositionToRestore')
      .toJS()
    dispatch(scrollToPosition(canvasScrollingPositionToRestore, true))
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

      // window.resize event listener
      // debounced 250 ms
      window.addEventListener('resize', () => {
        if (resizeDebounceTimeout) {
          // clear the timeout
          clearTimeout(resizeDebounceTimeout);
        }
        // start timing for event "completion"
        resizeDebounceTimeout = setTimeout(() => dispatch(scrollToVisiblePart()), 250)
      })

      // init canvas
      dispatch(setCanvasResolution(getCanvasResolution()))

      // For IOS 10+ as user-scalable : 0 does not work
      // https://community.esri.com/thread/184701-ios-10-user-scalableno
      // Disable pinch zoom on document
      document.documentElement.addEventListener(
        'touchstart',
        function (event) {
          if (event.touches.length > 1) {
            event.preventDefault()
          }
        },
        false
      )

      // Disable double tap on document
      var lastTouchEnd = 0
      document.documentElement.addEventListener(
        'touchend',
        function (event) {
          var now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false
      )
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

// prettier-ignore-next-block
export function scrollToVisiblePart () {
  // prettier-ignore-next-block
  return (dispatch, getState) => {
    const selectedVideo = getState()
      .app.get('availableVideos')
      .find(video => {
        return video.get('name') === getState().app.get('selectedVideo')
      })

    const videoPortraitOffset = selectedVideo.get('videoPortraitOffset')

    let offsetXToApply = 0
    let offsetYToApply = 0
    // Apply video Mobile offset from offsetX reference of 320x480
    // Compute relative innerWidth of the current aspect ratio
    const relativeInnerWidth = window.innerWidth / window.innerHeight * (9 / 16)

    // Aspect ratio < 16 /9 , portrait
    // Scroll to the interesting part of the video
    if (relativeInnerWidth <= 1) {
      const refRelativeXOffsetCenter =
        (videoPortraitOffset + 160) * (9 / 16) * (1 / 480)
      offsetXToApply =
        (refRelativeXOffsetCenter - relativeInnerWidth / 2) *
        (16 / 9) *
        window.innerHeight
    }

    // Aspect ratio > 16 /9 , landscape
    // Scroll to bottom of video
    if (relativeInnerWidth > 1) {
      const correctAspectRatioHeight = window.innerWidth * 9 / 16
      offsetYToApply = correctAspectRatioHeight - window.innerHeight
    }

    dispatch(
      scrollToPosition(
        {
          x: offsetXToApply,
          y: offsetYToApply
        },
        true
      )
    )
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
