import { fromJS } from 'immutable'

import { fetchRawDetections } from './RawDetectionsStateManagement'
import { fetchObjectTracker } from './ObjectTrackerStateManagement'
import { setVideoSrc, pauseVideo, playVideo } from './VideoStateManagement'

// Initial state
const initialState = fromJS({
  availableCities: ['stuttgart1', 'stuttgart2'],
  selectedCity: 'stuttgart1',
  selectedVideo: 'stuttgart1-level1',
  availableVideos: [
    {
      name: 'stuttgart1-level1',
      city: 'stuttgart1',
      level: 1,
      levelName: 'HAUPTSTÄTTER STR.',
      videoFPS: 25,
      videoMobileOffset: {
        x: 230,
        y: 0
      },
      trackerAndDetectionsFPS: 25,
      disappearAreas: [{ x: 0, y: 420, w: 640, h: 300 }],
      sound: 'sound1',
      originalResolution: {
        w: 1280,
        h: 720
      },
      sources: {
        // hd: "/static/detections/level_1/level_1.mp4",
        hd:
          'https://player.vimeo.com/external/237563941.hd.mp4?s=521162fbd4ba420ea6a2d04dcdf123c0a74a23e4'
      }
    },
    {
      name: 'stuttgart1-level2',
      city: 'stuttgart1',
      level: 2,
      levelName: 'MOOVEL STR.',
      videoFPS: 25,
      videoMobileOffset: {
        x: 400,
        y: 0
      },
      trackerAndDetectionsFPS: 25,
      disappearAreas: [
        { x: 285, y: 338, w: 188, h: 138 },
        { x: 156, y: 970, w: 476, h: 113.99999999999999 },
        { x: 960, y: 965, w: 548, h: 118 },
        { x: 1580.14, y: 311.86, w: 84, h: 94 },
        { x: 362, y: 425, w: 196, h: 106 }
      ],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/235911346.hd.mp4?s=079f01de35d181dbef705e7ec51da623b2f78de3'
      }
    },
    {
      name: 'stuttgart1-level3',
      city: 'stuttgart1',
      level: 3,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243127371.hd.mp4?s=7648497d1cb701e3653919cc98a9dd2dd5888164'
      }
    },
    {
      name: 'stuttgart2-level1',
      city: 'stuttgart2',
      level: 1,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243126724.hd.mp4?s=6719a11b32391f01afd275609bde87692d982e74'
      }
    },
    {
      name: 'stuttgart2-level2',
      city: 'stuttgart2',
      level: 2,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243127266.hd.mp4?s=c27f39395f58157ab91dc4d992369ceb72f8e2b7'
      }
    },
    {
      name: 'stuttgart2-level3',
      city: 'stuttgart2',
      level: 3,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243128409.hd.mp4?s=ba1bf393bb9da9d3dbe1b36c3ed061fd680584ee'
      }
    },
    {
      name: 'stuttgart3-level1',
      city: 'stuttgart3',
      level: 1,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243126826.hd.mp4?s=811adb4a918dc7da4a485467bccbc99ed645f21d'
      }
    },
    {
      name: 'stuttgart3-level2',
      city: 'stuttgart3',
      level: 2,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243127320.hd.mp4?s=f83879f38019ce04a55c6082730aab558e821dc4'
      }
    },
    {
      name: 'stuttgart3-level3',
      city: 'stuttgart3',
      level: 3,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243127419.hd.mp4?s=94619d6df70f65fe39a398a9ef3b30ae0bc44fc8'
      }
    },
    {
      name: 'stuttgart4-level1',
      city: 'stuttgart4',
      level: 1,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243126877.hd.mp4?s=c213044718117590f662d759c6c8e9f517586d0d&profile_id=174'
      }
    },
    {
      // Reuse previous one as we do not have original one for this level
      name: 'stuttgart3-level2',
      city: 'stuttgart4',
      level: 2,
      levelName: 'Reused STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243127320.hd.mp4?s=f83879f38019ce04a55c6082730aab558e821dc4'
      }
    },
    {
      // Reuse previous one as we do not have original one for this level
      name: 'stuttgart4-level3',
      city: 'stuttgart4',
      level: 3,
      levelName: 'Stuttgart STR.',
      videoFPS: 30,
      videoMobileOffset: {
        x: 0,
        y: 0
      },
      trackerAndDetectionsFPS: 30,
      disappearAreas: [],
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd:
          'https://player.vimeo.com/external/243128510.hd.mp4?s=108ac74d6fa81ec02610f50fd407cbe478da0554&profile_id=174'
      }
    }
  ],
  showMenu: false,
  playOnHideMenu: false
})

// Actions
const SELECT_VIDEO = 'App/SELECT_VIDEO'
const SELECT_CITY = 'App/SELECT_CITY'
const SHOW_MENU = 'App/SHOW_MENU'
const HIDE_MENU = 'App/HIDE_MENU'
const PLAY_ON_HIDE_MENU = 'App/PLAY_ON_HIDE_MENU'

let pathStatic = '/static/detections'

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
    console.log(level)

    const city = getState().app.get('selectedCity')

    const videoToSelect = getState()
      .app.get('availableVideos')
      .find(video => {
        return video.get('city') === city && video.get('level') === level
      })

    dispatch(selectVideo(videoToSelect.get('name')))
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

    dispatch(fetchRawDetections(getRawDetectionPath(videoSelectedName)))
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
    default:
      return state
  }
}
