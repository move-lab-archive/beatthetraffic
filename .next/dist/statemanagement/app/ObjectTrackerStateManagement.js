'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startFetchingObjectTracker = startFetchingObjectTracker;
exports.fetchObjectTrackerSuccess = fetchObjectTrackerSuccess;
exports.fetchObjectTrackerError = fetchObjectTrackerError;
exports.fetchObjectTracker = fetchObjectTracker;
exports.default = ObjectTrackerReducer;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _immutable = require('immutable');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial state
var initialState = (0, _immutable.fromJS)({
  data: {},
  isFetching: false,
  fetched: false,
  error: null
});

// Actions
var FETCH_OBJECTTRACKER_START = 'ObjectTracker/FETCH_OBJECTTRACKER_START';
var FETCH_OBJECTTRACKER_ERROR = 'ObjectTracker/FETCH_OBJECTTRACKER_ERROR';
var FETCH_OBJECTTRACKER_SUCCESS = 'ObjectTracker/FETCH_OBJECTTRACKER_SUCCESS';

function startFetchingObjectTracker() {
  return {
    type: FETCH_OBJECTTRACKER_START
  };
}

function fetchObjectTrackerSuccess(detections) {
  return {
    type: FETCH_OBJECTTRACKER_SUCCESS,
    payload: detections
  };
}

function fetchObjectTrackerError(error) {
  return {
    type: FETCH_OBJECTTRACKER_ERROR,
    payload: new Error(),
    error: true
  };
}

function fetchObjectTracker(src) {
  return function (dispatch, getState) {
    return new _promise2.default(function (resolve, reject) {
      // Notify UI we are fetching stuff
      dispatch(startFetchingObjectTracker());

      _axios2.default.get(src).then(function (response) {
        dispatch(fetchObjectTrackerSuccess(response.data));
        resolve();
      }, function (error) {
        dispatch(fetchObjectTrackerError(error));
        reject();
      });
    });
  };
}

// Reducer
function ObjectTrackerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FETCH_OBJECTTRACKER_START:
      return state.set('isFetching', true).set('fetched', false).set('error', null).set('data', {});
    case FETCH_OBJECTTRACKER_SUCCESS:
      return state.set('isFetching', false).set('fetched', true).set('data', action.payload);
    case FETCH_OBJECTTRACKER_ERROR:
      return state.set('isFetching', false).set('fetched', false).set('error', action.payload);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvT2JqZWN0VHJhY2tlclN0YXRlTWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJmcm9tSlMiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJpc0ZldGNoaW5nIiwiZmV0Y2hlZCIsImVycm9yIiwiRkVUQ0hfT0JKRUNUVFJBQ0tFUl9TVEFSVCIsIkZFVENIX09CSkVDVFRSQUNLRVJfRVJST1IiLCJGRVRDSF9PQkpFQ1RUUkFDS0VSX1NVQ0NFU1MiLCJzdGFydEZldGNoaW5nT2JqZWN0VHJhY2tlciIsInR5cGUiLCJmZXRjaE9iamVjdFRyYWNrZXJTdWNjZXNzIiwiZGV0ZWN0aW9ucyIsInBheWxvYWQiLCJmZXRjaE9iamVjdFRyYWNrZXJFcnJvciIsIkVycm9yIiwiZmV0Y2hPYmplY3RUcmFja2VyIiwic3JjIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJPYmplY3RUcmFja2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWdCTyxBQUFTO1FBTVQsQUFBUztRQU9ULEFBQVM7UUFRVCxBQUFTOzs7Ozs7O0FBckNoQixBQUFTOztBQUNULEFBQU87Ozs7OztBQUVQO0FBQ0EsSUFBTTtRQUFzQixBQUNwQixBQUNOO2NBRjBCLEFBRWQsQUFDWjtXQUgwQixBQUdqQixBQUNUO1NBSkYsQUFBcUIsQUFBTyxBQUluQjtBQUptQixBQUMxQixDQURtQjs7QUFPckI7QUFDQSxJQUFNLDRCQUFOLEFBQWtDO0FBQ2xDLElBQU0sNEJBQU4sQUFBa0M7QUFDbEMsSUFBTSw4QkFBTixBQUFvQyxBQUVwQzs7QUFBTyxzQ0FBdUMsQUFDNUM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sbUNBQUEsQUFBb0MsWUFBWSxBQUNyRDs7VUFBTyxBQUNDLEFBQ047YUFGRixBQUFPLEFBRUksQUFFWjtBQUpRLEFBQ0w7QUFLSjs7QUFBTyxpQ0FBQSxBQUFrQyxPQUFPLEFBQzlDOztVQUFPLEFBQ0MsQUFDTjthQUFTLElBRkosQUFFSSxBQUFJLEFBQ2I7V0FIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFNSjs7QUFBTyw0QkFBQSxBQUE2QixLQUFLLEFBQ3ZDO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCO2lDQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDdEM7QUFDQTtlQUFBLEFBQVMsQUFFVDs7c0JBQUEsQUFBTSxJQUFOLEFBQVUsS0FBVixBQUFlLEtBQ2Isb0JBQVksQUFDVjtpQkFBUywwQkFBMEIsU0FBbkMsQUFBUyxBQUFtQyxBQUM1QztBQUNEO0FBSkgsU0FLRSxpQkFBUyxBQUNQO2lCQUFTLHdCQUFULEFBQVMsQUFBd0IsQUFDakM7QUFDRDtBQVJILEFBVUQ7QUFkRCxBQUFPLEFBZVIsS0FmUTtBQURULEFBaUJEOzs7QUFFRCxBQUNBO0FBQWUsU0FBQSxBQUFTLHVCQUd0QjtNQUZBLEFBRUEsNEVBRlEsQUFFUjtNQURBLEFBQ0EsNkVBRFMsQUFDVCxBQUNBOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUNKLElBREksQUFDQSxjQURBLEFBQ2MsTUFEZCxBQUVKLElBRkksQUFFQSxXQUZBLEFBRVcsT0FGWCxBQUdKLElBSEksQUFHQSxTQUhBLEFBR1MsTUFIVCxBQUlKLElBSkksQUFJQSxRQUpQLEFBQU8sQUFJUSxBQUNqQjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFDSixJQURJLEFBQ0EsY0FEQSxBQUNjLE9BRGQsQUFFSixJQUZJLEFBRUEsV0FGQSxBQUVXLE1BRlgsQUFHSixJQUhJLEFBR0EsUUFBUSxPQUhmLEFBQU8sQUFHZSxBQUN4QjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFDSixJQURJLEFBQ0EsY0FEQSxBQUNjLE9BRGQsQUFFSixJQUZJLEFBRUEsV0FGQSxBQUVXLE9BRlgsQUFHSixJQUhJLEFBR0EsU0FBUyxPQUhoQixBQUFPLEFBR2dCLEFBQ3pCO0FBQ0U7YUFsQkosQUFrQkksQUFBTyxBQUVaIiwiZmlsZSI6Ik9iamVjdFRyYWNrZXJTdGF0ZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==