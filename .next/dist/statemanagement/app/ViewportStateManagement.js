'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOrientationChange = handleOrientationChange;
exports.handleFullScreenChange = handleFullScreenChange;
exports.initViewportListeners = initViewportListeners;
exports.computeVisibleArea = computeVisibleArea;
exports.setLandscape = setLandscape;
exports.setPortrait = setPortrait;
exports.setFullscreenAvailable = setFullscreenAvailable;
exports.setFullScreenStatus = setFullScreenStatus;
exports.default = ViewportStateManagement;

var _immutable = require('immutable');

var _screenfull = require('screenfull');

var _screenfull2 = _interopRequireDefault(_screenfull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial state
var initialState = (0, _immutable.fromJS)({
  listenersInitialized: false,
  deviceOrientation: 'none',
  isFullscreen: false,
  isFullscreenAvailable: false,
  canvasResolution: {
    w: 1280,
    h: 720
  }
});

// Actions
var SET_PORTRAIT = 'Viewport/SET_PORTRAIT';
var SET_LANDSCAPE = 'Viewport/SET_LANDSCAPE';
var INIT_LISTENERS = 'Viewport/INIT_LISTENERS';
var SET_FULLSCREEN_STATUS = 'Viewport/SET_FULLSCREEN_STATUS';
var SET_FULLSCREEN_AVAILABLE = 'Viewport/SET_FULLSCREEN_AVAILABLE';

function handleOrientationChange(dispatch) {
  // console.log(window.orientation)
  if (window.orientation === -90 || window.orientation === 90) {
    // console.log('landscape')
    dispatch(setLandscape());
    // Scroll to bottom ?
    window.scrollTo(0, document.body.scrollHeight);
  } else if (window.orientation !== undefined) {
    // console.log('portrait')
    dispatch(setPortrait());
  }
}

function handleFullScreenChange(dispatch) {
  if (_screenfull2.default.isFullscreen) {
    // console.log('entering fullscreen')
    dispatch(setFullScreenStatus(true));
  } else {
    // console.log('leaving fullscreen')
    dispatch(setFullScreenStatus(false));
  }
}

function initViewportListeners() {
  var _this = this;

  return function (dispatch, getState) {
    // Only if not initialized
    if (!getState().viewport.get('listenersInitialized')) {
      dispatch({
        type: INIT_LISTENERS
      });
      // console.log('init orientation change listener')
      window.addEventListener('orientationchange', handleOrientationChange.bind(_this, dispatch));
      handleOrientationChange(dispatch);
      if (_screenfull2.default.enabled) {
        // console.log('init fullscreen listener')
        _screenfull2.default.on('change', handleFullScreenChange.bind(_this, dispatch));
        dispatch(setFullscreenAvailable());
      }
    }
  };
}

function computeVisibleArea(resolutionToMap) {
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;

  var scrollPosition = {
    x: window.scrollX,
    y: window.scrollY
  };

  var visibleArea = {
    x: scrollPosition.x,
    w: innerWidth,
    y: scrollPosition.y,
    h: innerHeight

    // Map to resolutionToMap (the video original resolution of detections)

  };var width = void 0,
      height = void 0;
  if (innerWidth / innerHeight < 16 / 9) {
    // Height is 100% and there is a scroll on the width
    width = innerHeight * resolutionToMap.w / resolutionToMap.h;
    height = innerHeight;
  } else {
    // Width is 100% and there is a scroll on the height
    width = innerWidth;
    height = innerWidth * resolutionToMap.h / resolutionToMap.w;
  }

  var visibleCanvasArea = {
    x: visibleArea.x * resolutionToMap.w / width,
    w: visibleArea.w * resolutionToMap.w / width,
    y: visibleArea.y * resolutionToMap.h / height,
    h: visibleArea.h * resolutionToMap.h / height
  };

  return visibleCanvasArea;
}

function setLandscape() {
  return {
    type: SET_LANDSCAPE
  };
}

function setPortrait() {
  return {
    type: SET_PORTRAIT
  };
}

function setFullscreenAvailable() {
  return {
    type: SET_FULLSCREEN_AVAILABLE
  };
}

function setFullScreenStatus(status) {
  return {
    type: SET_FULLSCREEN_STATUS,
    payload: status
  };
}

// Reducer
function ViewportStateManagement() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_LANDSCAPE:
      return state.set('deviceOrientation', 'landscape');
    case SET_PORTRAIT:
      return state.set('deviceOrientation', 'portrait');
    case INIT_LISTENERS:
      return state.set('listenersInitialized', true);
    case SET_FULLSCREEN_STATUS:
      return state.set('isFullscreen', action.payload);
    case SET_FULLSCREEN_AVAILABLE:
      return state.set('isFullscreenAvailable', true);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvVmlld3BvcnRTdGF0ZU1hbmFnZW1lbnQuanMiXSwibmFtZXMiOlsiZnJvbUpTIiwic2NyZWVuZnVsbCIsImluaXRpYWxTdGF0ZSIsImxpc3RlbmVyc0luaXRpYWxpemVkIiwiZGV2aWNlT3JpZW50YXRpb24iLCJpc0Z1bGxzY3JlZW4iLCJpc0Z1bGxzY3JlZW5BdmFpbGFibGUiLCJjYW52YXNSZXNvbHV0aW9uIiwidyIsImgiLCJTRVRfUE9SVFJBSVQiLCJTRVRfTEFORFNDQVBFIiwiSU5JVF9MSVNURU5FUlMiLCJTRVRfRlVMTFNDUkVFTl9TVEFUVVMiLCJTRVRfRlVMTFNDUkVFTl9BVkFJTEFCTEUiLCJoYW5kbGVPcmllbnRhdGlvbkNoYW5nZSIsImRpc3BhdGNoIiwid2luZG93Iiwib3JpZW50YXRpb24iLCJzZXRMYW5kc2NhcGUiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsInVuZGVmaW5lZCIsInNldFBvcnRyYWl0IiwiaGFuZGxlRnVsbFNjcmVlbkNoYW5nZSIsInNldEZ1bGxTY3JlZW5TdGF0dXMiLCJpbml0Vmlld3BvcnRMaXN0ZW5lcnMiLCJnZXRTdGF0ZSIsInZpZXdwb3J0IiwiZ2V0IiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZW5hYmxlZCIsIm9uIiwic2V0RnVsbHNjcmVlbkF2YWlsYWJsZSIsImNvbXB1dGVWaXNpYmxlQXJlYSIsInJlc29sdXRpb25Ub01hcCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwieCIsInNjcm9sbFgiLCJ5Iiwic2Nyb2xsWSIsInZpc2libGVBcmVhIiwid2lkdGgiLCJoZWlnaHQiLCJ2aXNpYmxlQ2FudmFzQXJlYSIsInN0YXR1cyIsInBheWxvYWQiLCJWaWV3cG9ydFN0YXRlTWFuYWdlbWVudCIsInN0YXRlIiwiYWN0aW9uIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQXNCTyxB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Q3ZDO09BQUcsWUFBQSxBQUFZLElBQUksZ0JBQWhCLEFBQWdDLElBSnJDLEFBQTBCLEFBSWUsQUFHekM7QUFQMEIsQUFDeEI7O1NBTUYsQUFBTyxBQUNSO0FBRUQ7O0FBQU8sd0JBQXlCLEFBQzlCOztVQUFBLEFBQU8sQUFDQyxBQUVUO0FBSFEsQUFDTDtBQUlKOztBQUFPLHVCQUF3QixBQUM3Qjs7VUFBQSxBQUFPLEFBQ0MsQUFFVDtBQUhRLEFBQ0w7QUFJSjs7QUFBTyxrQ0FBbUMsQUFDeEM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sNkJBQUEsQUFBOEIsUUFBUSxBQUMzQzs7VUFBTyxBQUNDLEFBQ047YUFGRixBQUFPLEFBRUksQUFFWjtBQUpRLEFBQ0w7OztBQUtKLEFBQ0E7QUFBZSxTQUFBLEFBQVMsMEJBR3RCO01BRkEsQUFFQSw0RUFGUSxBQUVSO01BREEsQUFDQSw2RUFEUyxBQUNULEFBQ0E7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLHFCQUFqQixBQUFPLEFBQStCLEFBQ3hDO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxxQkFBakIsQUFBTyxBQUErQixBQUN4QztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsd0JBQWpCLEFBQU8sQUFBa0MsQUFDM0M7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLGdCQUFnQixPQUFqQyxBQUFPLEFBQWlDLEFBQzFDO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSx5QkFBakIsQUFBTyxBQUFtQyxBQUM1QztBQUNFO2FBWkosQUFZSSxBQUFPLEFBRVoiLCJmaWxlIjoiVmlld3BvcnRTdGF0ZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==