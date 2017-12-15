'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = process.env.NODE_ENV !== 'production' && (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify here name, actionsBlacklist, actionsCreators and other options
}) : _redux.compose;

var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)
// other store enhancers if any
);

var initStore = exports.initStore = function initStore(initialState) {
  if (typeof window === 'undefined') {
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
    return store;
  } else {
    if (!window.store) {
      // For each key of initialState, convert to Immutable object
      // Because SSR passed it as plain object
      (0, _keys2.default)(initialState).map(function (key, index) {
        initialState[key] = _immutable2.default.fromJS(initialState[key]);
      });
      window.store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
    }
    return window.store;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJJbW11dGFibGUiLCJ0aHVua01pZGRsZXdhcmUiLCJyZWR1Y2VycyIsImNvbXBvc2VFbmhhbmNlcnMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJlbmhhbmNlciIsImluaXRTdG9yZSIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwibWFwIiwia2V5IiwiaW5kZXgiLCJmcm9tSlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYSxBQUFpQjs7QUFDdkMsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7OztBQUVyQixJQUFNLDJCQUNKLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsZ0JBQ3pCLFFBQUEsQUFBTyw2REFBUCxBQUFPLGFBRFAsQUFDa0IsWUFDbEIsT0FGQSxBQUVPLDhDQUNILEFBQU87QUFKYixBQUNFLEFBR0ksQUFBNEMsQUFHNUM7QUFINEMsQUFDNUMsQ0FEQSxDQUhKOztBQVFGLElBQU0sNEJBQ0osQUFBZ0I7QUFEbEIsQUFBaUIsQUFFZixBQUdGO0FBTGlCOztBQUtWLElBQU0sZ0NBQVksU0FBWixBQUFZLHdCQUFnQixBQUN2QztNQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLGFBQWEsQUFDakM7UUFBSSxRQUFRLEFBQVksNENBQVosQUFBc0IsY0FBbEMsQUFBWSxBQUFvQyxBQUNoRDtXQUFBLEFBQU8sQUFDUjtBQUhELFNBR08sQUFDTDtRQUFJLENBQUMsT0FBTCxBQUFZLE9BQU8sQUFDakI7QUFDQTtBQUNBOzBCQUFBLEFBQVksY0FBWixBQUEwQixJQUFJLFVBQUEsQUFBVSxLQUFWLEFBQWUsT0FBTyxBQUNsRDtxQkFBQSxBQUFhLE9BQU8sb0JBQUEsQUFBVSxPQUFPLGFBQXJDLEFBQW9CLEFBQWlCLEFBQWEsQUFDbkQ7QUFGRCxBQUdBO2FBQUEsQUFBTyxRQUFRLEFBQVksNENBQVosQUFBc0IsY0FBckMsQUFBZSxBQUFvQyxBQUNwRDtBQUNEO1dBQU8sT0FBUCxBQUFjLEFBQ2Y7QUFDRjtBQWZNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=