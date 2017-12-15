'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRawDetectionPath = getRawDetectionPath;
exports.getTrackerDataPath = getTrackerDataPath;
exports.getAverageImgPath = getAverageImgPath;
exports.getFirstFrameImgPath = getFirstFrameImgPath;
exports.setIntroAnimPlayed = setIntroAnimPlayed;
exports.showMenu = showMenu;
exports.hideMenu = hideMenu;
exports.selectCity = selectCity;
exports.selectVideoForLevel = selectVideoForLevel;
exports.selectVideo = selectVideo;
exports.fetchRemainingData = fetchRemainingData;
exports.default = AppReducer;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _immutable = require('immutable');

var _RawDetectionsStateManagement = require('./RawDetectionsStateManagement');

var _ObjectTrackerStateManagement = require('./ObjectTrackerStateManagement');

var _VideoStateManagement = require('./VideoStateManagement');

var _SettingsStateManagement = require('./SettingsStateManagement');

var _gameconfig = require('../../gameconfig.json');

var _gameconfig2 = _interopRequireDefault(_gameconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial state
var initialState = (0, _immutable.fromJS)({
  availableCities: _gameconfig2.default.availableCities,
  selectedCity: _gameconfig2.default.defaultSelectedCity,
  selectedVideo: _gameconfig2.default.defaultSelectedCity + '-level1',
  availableVideos: _gameconfig2.default.availableVideos,
  showMenu: false,
  playOnHideMenu: false,
  unmuteOnHideMenu: false,
  introAnimPlayed: false
});

// Actions
var SELECT_VIDEO = 'App/SELECT_VIDEO';
var SELECT_CITY = 'App/SELECT_CITY';
var SHOW_MENU = 'App/SHOW_MENU';
var HIDE_MENU = 'App/HIDE_MENU';
var PLAY_ON_HIDE_MENU = 'App/PLAY_ON_HIDE_MENU';
var UNMUTE_ON_HIDE_MENU = 'App/UNMUTE_ON_HIDE_MENU';
var KEEP_MUTED_ON_HIDE_MENU = 'App/KEEP_MUTED_ON_HIDE_MENU';
var SET_INTROANIM_PLAYED = 'App/SET_INTROANIM_PLAYED';

var pathStatic = '/static/levels';

function getRawDetectionPath(videoName) {
  return pathStatic + '/' + videoName + '/rawdetections.txt';
}

function getTrackerDataPath(videoName) {
  return pathStatic + '/' + videoName + '/tracker.json';
}

function getAverageImgPath(videoName) {
  return pathStatic + '/' + videoName + '/average-1280.jpg';
}

function getFirstFrameImgPath(videoName) {
  return pathStatic + '/' + videoName + '/firstframe.jpg';
}

function setIntroAnimPlayed() {
  return {
    type: SET_INTROANIM_PLAYED
  };
}

function showMenu() {
  return function (dispatch, getState) {
    if (getState().video.get('isPlaying')) {
      // Pause video / game
      dispatch((0, _VideoStateManagement.pauseVideo)());
      // Set resume video on hide menu
      dispatch({
        type: PLAY_ON_HIDE_MENU
      });
    }

    if (getState().settings.get('soundEnabled')) {
      // Mute sounds
      dispatch((0, _SettingsStateManagement.turnSoundOff)());
      // Set unmute sound on hide menu
      dispatch({
        type: UNMUTE_ON_HIDE_MENU
      });
    } else {
      dispatch({
        type: KEEP_MUTED_ON_HIDE_MENU
      });
    }

    dispatch({
      type: SHOW_MENU
    });
  };
}

function hideMenu() {
  return function (dispatch, getState) {
    if (getState().app.get('playOnHideMenu')) {
      //  Unpause video / game
      dispatch((0, _VideoStateManagement.playVideo)());
    }

    if (getState().app.get('unmuteOnHideMenu')) {
      dispatch((0, _SettingsStateManagement.turnSoundOn)());
    }

    dispatch({
      type: HIDE_MENU
    });
  };
}

function selectCity(name) {
  return function (dispatch, getState) {
    dispatch({
      type: SELECT_CITY,
      payload: name
    });

    // Maybe here there will be assets to pre-load
    // but beware of the SSR, look at selectVideo()
  };
}

function selectVideoForLevel(level) {
  return function (dispatch, getState) {
    // console.log(level)

    var city = getState().app.get('selectedCity');

    var videoToSelect = getState().app.get('availableVideos').find(function (video) {
      return video.get('city') === city && video.get('level') === level;
    });

    dispatch(selectVideo(videoToSelect.get('name')));
    dispatch((0, _VideoStateManagement.prefetchImgFirstFrame)(videoToSelect.get('name')));
  };
}

function selectVideo(name) {
  return function (dispatch, getState) {
    return new _promise2.default(function (resolve, reject) {
      dispatch({
        type: SELECT_VIDEO,
        payload: name
      });

      var videoSelected = getState().app.get('availableVideos').find(function (video) {
        return video.get('name') === name;
      });

      // Set video src
      dispatch((0, _VideoStateManagement.setVideoSrc)(videoSelected.getIn(['sources', 'hd'])));

      // Fetch detection and object tracking data associated with the video
      // WARN: it executes only on client, we don't want to await for this MBs of data
      //       and include when in the bundle with the app on SSR
      if (!getState().settings.get('isServerRendering')) {
        dispatch((0, _RawDetectionsStateManagement.fetchRawDetections)(getRawDetectionPath(videoSelected.get('name'))));
        dispatch((0, _ObjectTrackerStateManagement.fetchObjectTracker)(getTrackerDataPath(videoSelected.get('name'))));
      }
    });
  };
}

// This action is only executed on first load when we render the javascript on the client
// It fetchs things that aren't included in the pre-ssr-render
function fetchRemainingData() {
  return function (dispatch, getState) {
    var videoSelectedName = getState().app.get('selectedVideo');
    dispatch((0, _VideoStateManagement.prefetchImgFirstFrame)(videoSelectedName));
    // Do not load raw detections in prod
    if (process.env.NODE_ENV !== 'production') {
      dispatch((0, _RawDetectionsStateManagement.fetchRawDetections)(getRawDetectionPath(videoSelectedName)));
    }
    dispatch((0, _ObjectTrackerStateManagement.fetchObjectTracker)(getTrackerDataPath(videoSelectedName)));
  };
}

// Reducer
function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SELECT_VIDEO:
      return state.set('selectedVideo', action.payload);
    case SELECT_CITY:
      return state.set('selectedCity', action.payload);
    case SHOW_MENU:
      return state.set('showMenu', true);
    case HIDE_MENU:
      return state.set('showMenu', false).set('playOnHideMenu', false);
    case PLAY_ON_HIDE_MENU:
      return state.set('playOnHideMenu', true);
    case UNMUTE_ON_HIDE_MENU:
      return state.set('unmuteOnHideMenu', true);
    case KEEP_MUTED_ON_HIDE_MENU:
      return state.set('unmuteOnHideMenu', false);
    case SET_INTROANIM_PLAYED:
      return state.set('introAnimPlayed', true);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvQXBwU3RhdGVNYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbImZyb21KUyIsImZldGNoUmF3RGV0ZWN0aW9ucyIsImZldGNoT2JqZWN0VHJhY2tlciIsInNldFZpZGVvU3JjIiwicGF1c2VWaWRlbyIsInBsYXlWaWRlbyIsInByZWZldGNoSW1nRmlyc3RGcmFtZSIsInR1cm5Tb3VuZE9uIiwidHVyblNvdW5kT2ZmIiwiR2FtZUNvbmZpZyIsImluaXRpYWxTdGF0ZSIsImF2YWlsYWJsZUNpdGllcyIsInNlbGVjdGVkQ2l0eSIsImRlZmF1bHRTZWxlY3RlZENpdHkiLCJzZWxlY3RlZFZpZGVvIiwiYXZhaWxhYmxlVmlkZW9zIiwic2hvd01lbnUiLCJwbGF5T25IaWRlTWVudSIsInVubXV0ZU9uSGlkZU1lbnUiLCJpbnRyb0FuaW1QbGF5ZWQiLCJTRUxFQ1RfVklERU8iLCJTRUxFQ1RfQ0lUWSIsIlNIT1dfTUVOVSIsIkhJREVfTUVOVSIsIlBMQVlfT05fSElERV9NRU5VIiwiVU5NVVRFX09OX0hJREVfTUVOVSIsIktFRVBfTVVURURfT05fSElERV9NRU5VIiwiU0VUX0lOVFJPQU5JTV9QTEFZRUQiLCJwYXRoU3RhdGljIiwiZ2V0UmF3RGV0ZWN0aW9uUGF0aCIsInZpZGVvTmFtZSIsImdldFRyYWNrZXJEYXRhUGF0aCIsImdldEF2ZXJhZ2VJbWdQYXRoIiwiZ2V0Rmlyc3RGcmFtZUltZ1BhdGgiLCJzZXRJbnRyb0FuaW1QbGF5ZWQiLCJ0eXBlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInZpZGVvIiwiZ2V0Iiwic2V0dGluZ3MiLCJoaWRlTWVudSIsImFwcCIsInNlbGVjdENpdHkiLCJuYW1lIiwicGF5bG9hZCIsInNlbGVjdFZpZGVvRm9yTGV2ZWwiLCJsZXZlbCIsImNpdHkiLCJ2aWRlb1RvU2VsZWN0IiwiZmluZCIsInNlbGVjdFZpZGVvIiwicmVzb2x2ZSIsInJlamVjdCIsInZpZGVvU2VsZWN0ZWQiLCJnZXRJbiIsImZldGNoUmVtYWluaW5nRGF0YSIsInZpZGVvU2VsZWN0ZWROYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQXNDTyxBQUFTO1FBSVQsQUFBUztRQUlULEFBQVM7UUFJVCxBQUFTO1FBSVQsQUFBUztRQU1ULEFBQVM7UUE4QlQsQUFBUztRQWlCVCxBQUFTO1FBWVQsQUFBUztRQWlCVCxBQUFTO1FBa0NULEFBQVM7Ozs7Ozs7QUExS2hCLEFBQVM7O0FBRVQsQUFBUyxBQUEwQjs7QUFDbkMsQUFBUyxBQUEwQjs7QUFDbkMsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNLOztBQUNQLEFBQVMsQUFBYSxBQUFvQjs7QUFFMUMsQUFBTyxBQUFnQjs7Ozs7O0FBRXZCO0FBQ0EsSUFBTTttQkFDYSxxQkFEUyxBQUNFLEFBQzVCO2dCQUFjLHFCQUZZLEFBRUQsQUFDekI7aUJBQWtCLHFCQUFsQixBQUE2QixzQkFISCxBQUkxQjttQkFBaUIscUJBSlMsQUFJRSxBQUM1QjtZQUwwQixBQUtoQixBQUNWO2tCQU4wQixBQU1WLEFBQ2hCO29CQVAwQixBQU9SLEFBQ2xCO21CQVJGLEFBQXFCLEFBQU8sQUFRVDtBQVJTLEFBQzFCLENBRG1COztBQVdyQjtBQUNBLElBQU0sZUFBTixBQUFxQjtBQUNyQixJQUFNLGNBQU4sQUFBb0I7QUFDcEIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sWUFBTixBQUFrQjtBQUNsQixJQUFNLG9CQUFOLEFBQTBCO0FBQzFCLElBQU0sc0JBQU4sQUFBNEI7QUFDNUIsSUFBTSwwQkFBTixBQUFnQztBQUNoQyxJQUFNLHVCQUFOLEFBQTZCOztBQUU3QixJQUFJLGFBQUosQUFBaUIsQUFFakI7O0FBQU8sNkJBQUEsQUFBOEIsV0FBVyxBQUM5QztTQUFBLEFBQVUsbUJBQVYsQUFBd0IsWUFDekI7QUFFRDs7QUFBTyw0QkFBQSxBQUE2QixXQUFXLEFBQzdDO1NBQUEsQUFBVSxtQkFBVixBQUF3QixZQUN6QjtBQUVEOztBQUFPLDJCQUFBLEFBQTRCLFdBQVcsQUFDNUM7U0FBQSxBQUFVLG1CQUFWLEFBQXdCLFlBQ3pCO0FBRUQ7O0FBQU8sOEJBQUEsQUFBK0IsV0FBVyxBQUMvQztTQUFBLEFBQVUsbUJBQVYsQUFBd0IsWUFDekI7QUFFRDs7QUFBTyw4QkFBK0IsQUFDcEM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sb0JBQXFCLEFBQzFCO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCO1FBQUksV0FBQSxBQUFXLE1BQVgsQUFBaUIsSUFBckIsQUFBSSxBQUFxQixjQUFjLEFBQ3JDO0FBQ0E7ZUFBQSxBQUFTLEFBQ1Q7QUFDQTs7Y0FBQSxBQUFTLEFBQ0QsQUFFVDtBQUhVLEFBQ1A7QUFJSjs7UUFBSSxXQUFBLEFBQVcsU0FBWCxBQUFvQixJQUF4QixBQUFJLEFBQXdCLGlCQUFpQixBQUMzQztBQUNBO2VBQUEsQUFBUyxBQUNUO0FBQ0E7O2NBQUEsQUFBUyxBQUNELEFBRVQ7QUFIVSxBQUNQO0FBTEosV0FPTyxBQUNMOztjQUFBLEFBQVMsQUFDRCxBQUVUO0FBSFUsQUFDUDtBQUlKOzs7WUFBQSxBQUFTLEFBQ0QsQUFFVDtBQUhVLEFBQ1A7QUF4QkosQUEyQkQ7QUFFRDs7QUFBTyxvQkFBcUIsQUFDMUI7U0FBTyxVQUFBLEFBQUMsVUFBRCxBQUFXLFVBQWEsQUFDN0I7UUFBSSxXQUFBLEFBQVcsSUFBWCxBQUFlLElBQW5CLEFBQUksQUFBbUIsbUJBQW1CLEFBQ3hDO0FBQ0E7ZUFBQSxBQUFTLEFBQ1Y7QUFFRDs7UUFBSSxXQUFBLEFBQVcsSUFBWCxBQUFlLElBQW5CLEFBQUksQUFBbUIscUJBQXFCLEFBQzFDO2VBQUEsQUFBUyxBQUNWO0FBRUQ7OztZQUFBLEFBQVMsQUFDRCxBQUVUO0FBSFUsQUFDUDtBQVhKLEFBY0Q7QUFFRDs7QUFBTyxvQkFBQSxBQUFxQixNQUFNLEFBQ2hDO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCOztZQUFTLEFBQ0QsQUFDTjtlQUZGLEFBQVMsQUFFRSxBQUdYO0FBTFMsQUFDUDs7QUFLRjtBQUNEO0FBUkQsQUFTRDtBQUVEOztBQUFPLDZCQUFBLEFBQThCLE9BQU8sQUFDMUM7U0FBTyxVQUFBLEFBQUMsVUFBRCxBQUFXLFVBQWEsQUFDN0I7QUFFQTs7UUFBTSxPQUFPLFdBQUEsQUFBVyxJQUFYLEFBQWUsSUFBNUIsQUFBYSxBQUFtQixBQUVoQzs7UUFBTSwyQkFBZ0IsQUFDbkIsSUFEbUIsQUFDZixJQURlLEFBQ1gsbUJBRFcsQUFFbkIsS0FBSyxpQkFBUyxBQUNiO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxZQUFWLEFBQXNCLFFBQVEsTUFBQSxBQUFNLElBQU4sQUFBVSxhQUEvQyxBQUE0RCxBQUM3RDtBQUpILEFBQXNCLEFBTXRCLEtBTnNCOzthQU1iLFlBQVksY0FBQSxBQUFjLElBQW5DLEFBQVMsQUFBWSxBQUFrQixBQUN2QzthQUFTLGlEQUFzQixjQUFBLEFBQWMsSUFBN0MsQUFBUyxBQUFzQixBQUFrQixBQUNsRDtBQWJELEFBY0Q7QUFFRDs7QUFBTyxxQkFBQSxBQUFzQixNQUFNLEFBQ2pDO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCO2lDQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDdEM7O2NBQVMsQUFDRCxBQUNOO2lCQUZGLEFBQVMsQUFFRSxBQUdYO0FBTFMsQUFDUDs7VUFJSSwyQkFBZ0IsQUFDbkIsSUFEbUIsQUFDZixJQURlLEFBQ1gsbUJBRFcsQUFFbkIsS0FBSyxpQkFBUyxBQUNiO2VBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxZQUFqQixBQUE2QixBQUM5QjtBQUpILEFBQXNCLEFBTXRCLE9BTnNCOztBQU90QjtlQUFTLHVDQUFZLGNBQUEsQUFBYyxNQUFNLENBQUEsQUFBQyxXQUExQyxBQUFTLEFBQVksQUFBb0IsQUFBWSxBQUVyRDs7QUFDQTtBQUNBO0FBQ0E7VUFBSSxDQUFDLFdBQUEsQUFBVyxTQUFYLEFBQW9CLElBQXpCLEFBQUssQUFBd0Isc0JBQXNCLEFBQ2pEO2lCQUNFLHNEQUFtQixvQkFBb0IsY0FBQSxBQUFjLElBRHZELEFBQ0UsQUFBbUIsQUFBb0IsQUFBa0IsQUFFM0Q7aUJBQ0Usc0RBQW1CLG1CQUFtQixjQUFBLEFBQWMsSUFEdEQsQUFDRSxBQUFtQixBQUFtQixBQUFrQixBQUUzRDtBQUNGO0FBMUJELEFBQU8sQUEyQlIsS0EzQlE7QUFEVCxBQTZCRDs7O0FBRUQ7QUFDQSxBQUNBO0FBQU8sOEJBQStCLEFBQ3BDO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCO1FBQU0sb0JBQW9CLFdBQUEsQUFBVyxJQUFYLEFBQWUsSUFBekMsQUFBMEIsQUFBbUIsQUFDN0M7YUFBUyxpREFBVCxBQUFTLEFBQXNCLEFBQy9CO0FBQ0E7UUFBSSxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQWhCLEFBQTZCLGNBQWMsQUFDekM7ZUFBUyxzREFBbUIsb0JBQTVCLEFBQVMsQUFBbUIsQUFBb0IsQUFDakQ7QUFDRDthQUFTLHNEQUFtQixtQkFBNUIsQUFBUyxBQUFtQixBQUFtQixBQUNoRDtBQVJELEFBU0Q7OztBQUVELEFBQ0E7QUFBZSxTQUFBLEFBQVMsYUFBK0M7TUFBbkMsQUFBbUMsNEVBQTNCLEFBQTJCO01BQWIsQUFBYSw2RUFBSixBQUFJLEFBQ3JFOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxpQkFBaUIsT0FBbEMsQUFBTyxBQUFrQyxBQUMzQztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsZ0JBQWdCLE9BQWpDLEFBQU8sQUFBaUMsQUFDMUM7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQWpCLEFBQU8sQUFBc0IsQUFDL0I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQVYsQUFBc0IsT0FBdEIsQUFBNkIsSUFBN0IsQUFBaUMsa0JBQXhDLEFBQU8sQUFBbUQsQUFDNUQ7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLGtCQUFqQixBQUFPLEFBQTRCLEFBQ3JDO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxvQkFBakIsQUFBTyxBQUE4QixBQUN2QztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsb0JBQWpCLEFBQU8sQUFBOEIsQUFDdkM7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLG1CQUFqQixBQUFPLEFBQTZCLEFBQ3RDO0FBQ0U7YUFsQkosQUFrQkksQUFBTyxBQUVaIiwiZmlsZSI6IkFwcFN0YXRlTWFuYWdlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9