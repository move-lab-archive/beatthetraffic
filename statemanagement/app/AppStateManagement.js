import { fromJS } from 'immutable';
import axios from 'axios';

import { fetchRawDetections } from './RawDetectionsStateManagement';
import { fetchObjectTracker } from './ObjectTrackerStateManagement';
import { setVideoSrc } from './VideoStateManagement';
import { resetScore } from './GameStateManagement';

// Initial state
const initialState = fromJS({
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
      vimeoId: "237563941",
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
      vimeoId: "235911346",
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

export function selectDefaultVideo() {
  return (dispatch, getState) => {
    dispatch(selectVideo(getState().app.get('selectedVideo')));
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

      // Fetch detection and object tracking data
      dispatch(fetchRawDetections(getRawDetectionPath(videoSelected.get('name'), videoSelected.get('vimeoId'))));
      dispatch(fetchObjectTracker(getTrackerDataPath(videoSelected.get('name'), videoSelected.get('vimeoId'))));
    });
  }
}

// Reducer
export default function SettingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_VIDEO:
      return state.set('selectedVideo', action.payload)
    default:
      return state;
  }
}
