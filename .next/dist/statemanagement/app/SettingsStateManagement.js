'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSettings = updateSettings;
exports.setClientRendering = setClientRendering;
exports.turnSoundOn = turnSoundOn;
exports.turnSoundOff = turnSoundOff;
exports.default = SettingsReducer;

var _immutable = require('immutable');

var _SoundsManager = require('./SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial state
var initialState = (0, _immutable.fromJS)({
  showDebugUI: false,
  darkMode: false,
  soundEnabled: process.env.NODE_ENV === 'production', // disable sounds in dev mode by default
  isServerRendering: true
});

// Actions
var UPDATE_SETTINGS = 'Settings/UPDATE';

// TODO MOVE SOUND IN APP STATE MANAGEMENT
var SOUND_ON = 'Settings/SOUND_ON';
var SOUND_OFF = 'Settings/SOUND_OFF';

var SET_CLIENT_RENDERING = 'Settings/SET_CLIENT_RENDERING';

function updateSettings(newSettings) {
  return {
    type: UPDATE_SETTINGS,
    payload: newSettings
  };
}

function setClientRendering() {
  return {
    type: SET_CLIENT_RENDERING
  };
}

function turnSoundOn() {
  return function (dispatch, getState) {
    _SoundsManager2.default.unMuteAll();

    dispatch({
      type: SOUND_ON
    });
  };
}

function turnSoundOff() {
  return function (dispatch, getState) {
    _SoundsManager2.default.muteAll();

    dispatch({
      type: SOUND_OFF
    });
  };
}

// Reducer
function SettingsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case UPDATE_SETTINGS:
      return state.merge(action.payload);
    case SOUND_ON:
      return state.set('soundEnabled', true);
    case SOUND_OFF:
      return state.set('soundEnabled', false);
    case SET_CLIENT_RENDERING:
      return state.set('isServerRendering', false);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvU2V0dGluZ3NTdGF0ZU1hbmFnZW1lbnQuanMiXSwibmFtZXMiOlsiZnJvbUpTIiwiU291bmRzTWFuYWdlciIsImluaXRpYWxTdGF0ZSIsInNob3dEZWJ1Z1VJIiwiZGFya01vZGUiLCJzb3VuZEVuYWJsZWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJpc1NlcnZlclJlbmRlcmluZyIsIlVQREFURV9TRVRUSU5HUyIsIlNPVU5EX09OIiwiU09VTkRfT0ZGIiwiU0VUX0NMSUVOVF9SRU5ERVJJTkciLCJ1cGRhdGVTZXR0aW5ncyIsIm5ld1NldHRpbmdzIiwidHlwZSIsInBheWxvYWQiLCJzZXRDbGllbnRSZW5kZXJpbmciLCJ0dXJuU291bmRPbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJ1bk11dGVBbGwiLCJ0dXJuU291bmRPZmYiLCJtdXRlQWxsIiwiU2V0dGluZ3NSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJtZXJnZSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFvQk8sQUFBUztRQU9ULEFBQVM7UUFNVCxBQUFTO1FBVVQsQUFBUzs7O0FBM0NoQixBQUFTOztBQUNULEFBQU8sQUFBbUI7Ozs7OztBQUUxQjtBQUNBLElBQU07ZUFBc0IsQUFDYixBQUNiO1lBRjBCLEFBRWhCLEFBQ1Y7Z0JBQWMsUUFBQSxBQUFRLElBQVIsQUFBWSxhQUhBLEFBR2EsY0FBYyxBQUNyRDtxQkFKRixBQUFxQixBQUFPLEFBSVA7QUFKTyxBQUMxQixDQURtQjs7QUFPckI7QUFDQSxJQUFNLGtCQUFOLEFBQXdCOztBQUV4QjtBQUNBLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFlBQU4sQUFBa0I7O0FBRWxCLElBQU0sdUJBQU4sQUFBNkIsQUFFN0I7O0FBQU8sd0JBQUEsQUFBeUIsYUFBYSxBQUMzQzs7VUFBTyxBQUNDLEFBQ047YUFGRixBQUFPLEFBRUksQUFFWjtBQUpRLEFBQ0w7QUFLSjs7QUFBTyw4QkFBK0IsQUFDcEM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sdUJBQXdCLEFBQzdCO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCOzRCQUFBLEFBQWMsQUFFZDs7O1lBQUEsQUFBUyxBQUNELEFBRVQ7QUFIVSxBQUNQO0FBSkosQUFPRDtBQUVEOztBQUFPLHdCQUF5QixBQUM5QjtTQUFPLFVBQUEsQUFBQyxVQUFELEFBQVcsVUFBYSxBQUM3Qjs0QkFBQSxBQUFjLEFBRWQ7OztZQUFBLEFBQVMsQUFDRCxBQUVUO0FBSFUsQUFDUDtBQUpKLEFBT0Q7OztBQUVELEFBQ0E7QUFBZSxTQUFBLEFBQVMsa0JBQW9EO01BQW5DLEFBQW1DLDRFQUEzQixBQUEyQjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUMxRTs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxNQUFNLE9BQW5CLEFBQU8sQUFBbUIsQUFDNUI7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLGdCQUFqQixBQUFPLEFBQTBCLEFBQ25DO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxnQkFBakIsQUFBTyxBQUEwQixBQUNuQztTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUscUJBQWpCLEFBQU8sQUFBK0IsQUFDeEM7QUFDRTthQVZKLEFBVUksQUFBTyxBQUVaIiwiZmlsZSI6IlNldHRpbmdzU3RhdGVNYW5hZ2VtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=