'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVideoSrc = setVideoSrc;
exports.setVideoReady = setVideoReady;
exports.imgFirstFrameLoaded = imgFirstFrameLoaded;
exports.firstFrameLoaded = firstFrameLoaded;
exports.playVideo = playVideo;
exports.pauseVideo = pauseVideo;
exports.resetVideo = resetVideo;
exports.setVideoEnded = setVideoEnded;
exports.updateCurrentTime = updateCurrentTime;
exports.prefetchImgFirstFrame = prefetchImgFirstFrame;
exports.prefetchNextLevelFirstFrame = prefetchNextLevelFirstFrame;
exports.default = VideoReducer;

var _immutable = require('immutable');

var _GameStateManagement = require('../../statemanagement/app/GameStateManagement');

var _AppStateManagement = require('../../statemanagement/app/AppStateManagement');

// Initial state
var initialState = (0, _immutable.fromJS)({
  src: null,
  isPlaying: false,
  isPaused: false,
  isReadyToPlay: false,
  isAtBeggining: true,
  firstFrameLoaded: false,
  imgFirstFrameLoaded: false,
  error: null,
  duration: null,
  currentTime: 0
});

// Actions

var SET_VIDEO_SRC = 'Video/SET_VIDEO_SRC';
var SET_VIDEO_READY = 'Video/SET_VIDEO_READY';
var SET_FIRSTFRAME_LOADED = 'Video/SET_FIRSTFRAME_LOADED';
var SET_IMG_FIRSTFRAME_LOADED = 'VIdeo/SET_IMG_FIRSTFRAME_LOADED';
var PLAY_VIDEO = 'Video/PLAY_VIDEO';
var PAUSE_VIDEO = 'Video/PAUSE_VIDEO';
var RESET_VIDEO = 'Video/RESET_VIDEO';
var UPDATE_CURRENTTIME = 'Video/UPDATE_CURRENTTIME';

function setVideoSrc(src) {
  return {
    type: SET_VIDEO_SRC,
    payload: src
  };
}

function setVideoReady(metadata) {
  return {
    type: SET_VIDEO_READY,
    payload: metadata
  };
}

function imgFirstFrameLoaded() {
  return {
    type: SET_IMG_FIRSTFRAME_LOADED
  };
}

function firstFrameLoaded() {
  return {
    type: SET_FIRSTFRAME_LOADED
  };
}

function playVideo() {
  return {
    type: PLAY_VIDEO
  };
}

function pauseVideo() {
  return {
    type: PAUSE_VIDEO
  };
}

function resetVideo() {
  return {
    type: RESET_VIDEO
  };
}

function setVideoEnded() {
  return function (dispatch, getState) {
    // Notify game that video has ended
    dispatch((0, _GameStateManagement.levelFinished)());

    dispatch({
      type: PAUSE_VIDEO
    });
  };
}

function updateCurrentTime(time) {
  return {
    type: UPDATE_CURRENTTIME,
    payload: time
  };
}

function prefetchImgFirstFrame(videoName) {
  return function (dispatch, getState) {
    // Only execute this code on client
    if (getState().settings.get('isServerRendering')) {
      return;
    }
    // Preload firstframe with image asset
    // We start the intro animation with just
    // the first frame loaded and not necesarly the video
    var srcFirstFrame = (0, _AppStateManagement.getFirstFrameImgPath)(videoName);

    var imgFirstFrame = new Image();
    imgFirstFrame.onload = function () {
      dispatch(imgFirstFrameLoaded());
    };
    imgFirstFrame.src = srcFirstFrame;
  };
}

function prefetchNextLevelFirstFrame() {
  return function (dispatch, getState) {
    var nextLevel = getState().game.get('currentLevel') + 1;
    var city = getState().app.get('selectedCity');

    var nextLevelVideo = getState().app.get('availableVideos').find(function (video) {
      return video.get('city') === city && video.get('level') === nextLevel;
    });

    dispatch(prefetchImgFirstFrame(nextLevelVideo.get('name')));
  };
}

// Reducer
function VideoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_VIDEO_SRC:
      return state.merge(initialState).set('src', action.payload);
    case SET_VIDEO_READY:
      return state.set('isReadyToPlay', true).set('duration', action.payload.duration);
    case SET_FIRSTFRAME_LOADED:
      return state.set('firstFrameLoaded', true);
    case SET_IMG_FIRSTFRAME_LOADED:
      return state.set('imgFirstFrameLoaded', true);
    case PLAY_VIDEO:
      return state.set('isPlaying', true).set('isAtBeggining', false);
    case PAUSE_VIDEO:
      return state.set('isPlaying', false);
    case RESET_VIDEO:
      return state.set('isAtBeggining', true);
    case UPDATE_CURRENTTIME:
      return state.set('currentTime', action.payload);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvVmlkZW9TdGF0ZU1hbmFnZW1lbnQuanMiXSwibmFtZXMiOlsiZnJvbUpTIiwibGV2ZWxGaW5pc2hlZCIsImdldEZpcnN0RnJhbWVJbWdQYXRoIiwiaW5pdGlhbFN0YXRlIiwic3JjIiwiaXNQbGF5aW5nIiwiaXNQYXVzZWQiLCJpc1JlYWR5VG9QbGF5IiwiaXNBdEJlZ2dpbmluZyIsImZpcnN0RnJhbWVMb2FkZWQiLCJpbWdGaXJzdEZyYW1lTG9hZGVkIiwiZXJyb3IiLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwiU0VUX1ZJREVPX1NSQyIsIlNFVF9WSURFT19SRUFEWSIsIlNFVF9GSVJTVEZSQU1FX0xPQURFRCIsIlNFVF9JTUdfRklSU1RGUkFNRV9MT0FERUQiLCJQTEFZX1ZJREVPIiwiUEFVU0VfVklERU8iLCJSRVNFVF9WSURFTyIsIlVQREFURV9DVVJSRU5UVElNRSIsInNldFZpZGVvU3JjIiwidHlwZSIsInBheWxvYWQiLCJzZXRWaWRlb1JlYWR5IiwibWV0YWRhdGEiLCJwbGF5VmlkZW8iLCJwYXVzZVZpZGVvIiwicmVzZXRWaWRlbyIsInNldFZpZGVvRW5kZWQiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwidXBkYXRlQ3VycmVudFRpbWUiLCJ0aW1lIiwicHJlZmV0Y2hJbWdGaXJzdEZyYW1lIiwidmlkZW9OYW1lIiwic2V0dGluZ3MiLCJnZXQiLCJzcmNGaXJzdEZyYW1lIiwiaW1nRmlyc3RGcmFtZSIsIkltYWdlIiwib25sb2FkIiwicHJlZmV0Y2hOZXh0TGV2ZWxGaXJzdEZyYW1lIiwibmV4dExldmVsIiwiZ2FtZSIsImNpdHkiLCJhcHAiLCJuZXh0TGV2ZWxWaWRlbyIsImZpbmQiLCJ2aWRlbyIsIlZpZGVvUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibWVyZ2UiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBOEJPLEFBQVM7UUFPVCxBQUFTO1FBT1QsQUFBUztRQU1ULEFBQVM7UUFNVCxBQUFTO1FB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TXZCLEtBTnVCOzthQU1kLHNCQUFzQixlQUFBLEFBQWUsSUFBOUMsQUFBUyxBQUFzQixBQUFtQixBQUNuRDtBQVhELEFBWUQ7OztBQUVELEFBQ0E7QUFBZSxTQUFBLEFBQVMsZUFBaUQ7TUFBbkMsQUFBbUMsNEVBQTNCLEFBQTJCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3ZFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLE1BQU4sQUFBWSxjQUFaLEFBQTBCLElBQTFCLEFBQThCLE9BQU8sT0FBNUMsQUFBTyxBQUE0QyxBQUNyRDtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFDSixJQURJLEFBQ0EsaUJBREEsQUFDaUIsTUFEakIsQUFFSixJQUZJLEFBRUEsWUFBWSxPQUFBLEFBQU8sUUFGMUIsQUFBTyxBQUUyQixBQUNwQztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsb0JBQWpCLEFBQU8sQUFBOEIsQUFDdkM7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLHVCQUFqQixBQUFPLEFBQWlDLEFBQzFDO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxhQUFWLEFBQXVCLE1BQXZCLEFBQTZCLElBQTdCLEFBQWlDLGlCQUF4QyxBQUFPLEFBQWtELEFBQzNEO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxhQUFqQixBQUFPLEFBQXVCLEFBQ2hDO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxpQkFBakIsQUFBTyxBQUEyQixBQUNwQztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsZUFBZSxPQUFoQyxBQUFPLEFBQWdDLEFBQ3pDO0FBQ0U7YUFwQkosQUFvQkksQUFBTyxBQUVaIiwiZmlsZSI6IlZpZGVvU3RhdGVNYW5hZ2VtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=