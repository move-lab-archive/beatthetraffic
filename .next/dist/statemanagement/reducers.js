'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _ObjectTrackerStateManagement = require('./app/ObjectTrackerStateManagement');

var _ObjectTrackerStateManagement2 = _interopRequireDefault(_ObjectTrackerStateManagement);

var _RawDetectionsStateManagement = require('./app/RawDetectionsStateManagement');

var _RawDetectionsStateManagement2 = _interopRequireDefault(_RawDetectionsStateManagement);

var _VideoStateManagement = require('./app/VideoStateManagement');

var _VideoStateManagement2 = _interopRequireDefault(_VideoStateManagement);

var _SettingsStateManagement = require('./app/SettingsStateManagement');

var _SettingsStateManagement2 = _interopRequireDefault(_SettingsStateManagement);

var _AppStateManagement = require('./app/AppStateManagement');

var _AppStateManagement2 = _interopRequireDefault(_AppStateManagement);

var _GameStateManagement = require('./app/GameStateManagement');

var _GameStateManagement2 = _interopRequireDefault(_GameStateManagement);

var _ViewportStateManagement = require('./app/ViewportStateManagement');

var _ViewportStateManagement2 = _interopRequireDefault(_ViewportStateManagement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  app: _AppStateManagement2.default,
  objectTracker: _ObjectTrackerStateManagement2.default,
  rawDetections: _RawDetectionsStateManagement2.default,
  video: _VideoStateManagement2.default,
  settings: _SettingsStateManagement2.default,
  game: _GameStateManagement2.default,
  viewport: _ViewportStateManagement2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJvYmplY3RUcmFja2VyIiwicmF3RGV0ZWN0aW9ucyIsInZpZGVvIiwic2V0dGluZ3MiLCJhcHAiLCJnYW1lIiwidmlld3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWMsQUFFckI7Ozs7Ozs7QUFBK0IsQUFFN0I7QUFGNkIsQUFHN0I7QUFINkIsQUFJN0I7QUFKNkIsQUFLN0I7QUFMNkIsQUFNN0I7QUFONkIsQUFPN0I7QUFQRixBQUFlLEFBQWdCO0FBQUEsQUFDN0IsQ0FEYSIsImZpbGUiOiJyZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9