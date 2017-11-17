import { fromJS } from 'immutable';
import axios from 'axios';

import { fetchRawDetections } from './RawDetectionsStateManagement';
import { fetchObjectTracker } from './ObjectTrackerStateManagement';
import { setVideoSrc } from './VideoStateManagement';

// Initial state
const initialState = fromJS({
  availableCities: [
    "stuttgart1",
    "stuttgart2"
  ],
  selectedCity: "stuttgart1",
  availableVideos: [{
      name: "stuttgart1-level1",
      city: "stuttgart1",
      level: 1,
      levelName: "HAUPTSTÄTTER STR.",
      videoFPS: 25,
      videoMobileOffset: {
        x: 230,
        y: 0
      },
      trackerAndDetectionsFPS: 25,
      disappearAreas: [{"x":0,"y":420,"w":640,"h":300}],
      sound: "sound1",
      originalResolution: {
        w: 1280,
        h: 720
      },
      sources: {
        // hd: "/static/detections/level_1/level_1.mp4",
        hd: "https://player.vimeo.com/external/237563941.hd.mp4?s=521162fbd4ba420ea6a2d04dcdf123c0a74a23e4"
      }
    },{
      name: "stuttgart1-level2",
      city: "stuttgart1",
      level: 2,
      levelName: "MOOVEL STR.",
      videoFPS: 25,
      videoMobileOffset: {
        x: 400,
        y: 0
      },
      trackerAndDetectionsFPS: 25,
      disappearAreas: [{"x":285,"y":338,"w":188,"h":138},{"x":156,"y":970,"w":476,"h":113.99999999999999},{"x":960,"y":965,"w":548,"h":118},{"x":1580.14,"y":311.86,"w":84,"h":94},{"x":362,"y":425,"w":196,"h":106}],
      sound: "sound2",
      originalResolution: {
        w: 1920,
        h: 1080
      },
      sources: {
        hd: "https://player.vimeo.com/external/235911346.hd.mp4?s=079f01de35d181dbef705e7ec51da623b2f78de3"
      }
    }
  ],
  selectedVideo: "stuttgart1-level1"
});

// Actions
const SELECT_VIDEO = 'App/SELECT_VIDEO'
const SELECT_CITY = 'App/SELECT_CITY'

let pathStatic = '/static/detections';

export function getRawDetectionPath(videoName) {
  return `${pathStatic}/${videoName}/rawdetections.txt`;
}

export function getTrackerDataPath(videoName) {
  return `${pathStatic}/${videoName}/tracker.json`;
}

export function getAverageImgPath(videoName) {
  return `${pathStatic}/${videoName}/average-1280.jpg`;
}

export function getFirstFrameImgPath(videoName) {
  return `${pathStatic}/${videoName}/firstframe.jpg`;
}

export function selectCity(name) {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_CITY,
      payload: name
    });

    // Maybe here there will be assets to pre-load 
    // but beware of the SSR, look at selectVideo()
  }
}

export function selectVideoForLevel(level) {
  return (dispatch, getState) => {

    console.log(level);

    const city = getState().app.get('selectedCity');

    const videoToSelect = getState().app.get('availableVideos').find((video) => {
      return (video.get('city') === city && video.get('level') === level)
    });

    dispatch(selectVideo(videoToSelect.get('name')));
  }
}

export function selectVideo(name) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {

      dispatch({
        type: SELECT_VIDEO,
        payload: name
      });

      const videoSelected = getState().app.get('availableVideos').find((video) => {
        return video.get('name') === name
      });

      // Set video src
      dispatch(setVideoSrc(videoSelected.getIn(['sources','hd'])));

      // Fetch detection and object tracking data associated with the video
      // WARN: it executes only on client, we don't want to await for this MBs of data
      //       and include when in the bundle with the app on SSR
      if(!getState().settings.get('isServerRendering')) {
        dispatch(fetchRawDetections(getRawDetectionPath(videoSelected.get('name'))));
        dispatch(fetchObjectTracker(getTrackerDataPath(videoSelected.get('name'))));
      }
    });
  }
}

// This action is only executed on first load when we render the javascript on the client
// It fetchs things that aren't included in the pre-ssr-render
export function fetchRemainingData() {
  return (dispatch, getState) => {

    const videoSelectedName = getState().app.get('selectedVideo');

    dispatch(fetchRawDetections(getRawDetectionPath(videoSelectedName)));
    dispatch(fetchObjectTracker(getTrackerDataPath(videoSelectedName)));
  }
}

// Reducer
export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_VIDEO:
      return state.set('selectedVideo', action.payload)
    case SELECT_CITY:
      return state.set('selectedCity', action.payload)
    default:
      return state;
  }
}
