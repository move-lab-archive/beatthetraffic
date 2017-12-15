'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startFetchingRawDetections = startFetchingRawDetections;
exports.fetchRawDetectionsSuccess = fetchRawDetectionsSuccess;
exports.fetchRawDetectionsError = fetchRawDetectionsError;
exports.fetchRawDetections = fetchRawDetections;
exports.default = RawDetectionsReducer;

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
var FETCH_RAWDETECTIONS_START = 'RawDetections/FETCH_RAWDETECTIONS_START';
var FETCH_RAWDETECTIONS_ERROR = 'RawDetections/FETCH_RAWDETECTIONS_ERROR';
var FETCH_RAWDETECTIONS_SUCCESS = 'RawDetections/FETCH_RAWDETECTIONS_SUCCESS';

function startFetchingRawDetections() {
  return {
    type: FETCH_RAWDETECTIONS_START
  };
}

function fetchRawDetectionsSuccess(detections) {
  return {
    type: FETCH_RAWDETECTIONS_SUCCESS,
    payload: detections
  };
}

function fetchRawDetectionsError(error) {
  return {
    type: FETCH_RAWDETECTIONS_ERROR,
    payload: new Error(),
    error: true
  };
}

function fetchRawDetections(src) {
  return function (dispatch, getState) {
    return new _promise2.default(function (resolve, reject) {
      // Notify UI we are fetching stuff
      dispatch(startFetchingRawDetections());

      _axios2.default.get(src).then(function (response) {
        // Parse txt file
        var rawDetections = {};
        var lines = response.data.split('\n');
        lines.forEach(function (line) {
          if (line) {
            var detection = JSON.parse(line);
            rawDetections[detection.frame] = detection.detections;
          }
        });
        dispatch(fetchRawDetectionsSuccess(rawDetections));
        resolve();
      }, function (error) {
        dispatch(fetchRawDetectionsError(error));
        reject();
      });
    });
  };
}

// Reducer
function RawDetectionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FETCH_RAWDETECTIONS_START:
      return state.set('isFetching', true).set('fetched', false).set('error', null).set('data', {});
    case FETCH_RAWDETECTIONS_SUCCESS:
      return state.set('isFetching', false).set('fetched', true).set('data', action.payload);
    case FETCH_RAWDETECTIONS_ERROR:
      return state.set('isFetching', false).set('fetched', false).set('error', action.payload);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvUmF3RGV0ZWN0aW9uc1N0YXRlTWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJmcm9tSlMiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJpc0ZldGNoaW5nIiwiZmV0Y2hlZCIsImVycm9yIiwiRkVUQ0hfUkFXREVURUNUSU9OU19TVEFSVCIsIkZFVENIX1JBV0RFVEVDVElPTlNfRVJST1IiLCJGRVRDSF9SQVdERVRFQ1RJT05TX1NVQ0NFU1MiLCJzdGFydEZldGNoaW5nUmF3RGV0ZWN0aW9ucyIsInR5cGUiLCJmZXRjaFJhd0RldGVjdGlvbnNTdWNjZXNzIiwiZGV0ZWN0aW9ucyIsInBheWxvYWQiLCJmZXRjaFJhd0RldGVjdGlvbnNFcnJvciIsIkVycm9yIiwiZmV0Y2hSYXdEZXRlY3Rpb25zIiwic3JjIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmF3RGV0ZWN0aW9ucyIsImxpbmVzIiwicmVzcG9uc2UiLCJzcGxpdCIsImZvckVhY2giLCJsaW5lIiwiZGV0ZWN0aW9uIiwiSlNPTiIsInBhcnNlIiwiZnJhbWUiLCJSYXdEZXRlY3Rpb25zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWdCTyxBQUFTO1FBTVQsQUFBUztRQU9ULEFBQVM7UUFRVCxBQUFTOzs7Ozs7O0FBckNoQixBQUFTOztBQUNULEFBQU87Ozs7OztBQUVQO0FBQ0EsSUFBTTtRQUFzQixBQUNwQixBQUNOO2NBRjBCLEFBRWQsQUFDWjtXQUgwQixBQUdqQixBQUNUO1NBSkYsQUFBcUIsQUFBTyxBQUluQjtBQUptQixBQUMxQixDQURtQjs7QUFPckI7QUFDQSxJQUFNLDRCQUFOLEFBQWtDO0FBQ2xDLElBQU0sNEJBQU4sQUFBa0M7QUFDbEMsSUFBTSw4QkFBTixBQUFvQyxBQUVwQzs7QUFBTyxzQ0FBdUMsQUFDNUM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sbUNBQUEsQUFBb0MsWUFBWSxBQUNyRDs7VUFBTyxBQUNDLEFBQ047YUFGRixBQUFPLEFBRUksQUFFWjtBQUpRLEFBQ0w7QUFLSjs7QUFBTyxpQ0FBQSxBQUFrQyxPQUFPLEFBQzlDOztVQUFPLEFBQ0MsQUFDTjthQUFTLElBRkosQUFFSSxBQUFJLEFBQ2I7V0FIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFNSjs7QUFBTyw0QkFBQSxBQUE2QixLQUFLLEFBQ3ZDO1NBQU8sVUFBQSxBQUFDLFVBQUQsQUFBVyxVQUFhLEFBQzdCO2lDQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDdEM7QUFDQTtlQUFBLEFBQVMsQUFFVDs7c0JBQUEsQUFBTSxJQUFOLEFBQVUsS0FBVixBQUFlLEtBQ2Isb0JBQVksQUFDVjtBQUNBO1lBQUksZ0JBQUosQUFBb0IsQUFDcEI7WUFBSSxRQUFRLFNBQUEsQUFBUyxLQUFULEFBQWMsTUFBMUIsQUFBWSxBQUFvQixBQUNoQztjQUFBLEFBQU0sUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUM1QjtjQUFBLEFBQUksTUFBTSxBQUNSO2dCQUFJLFlBQVksS0FBQSxBQUFLLE1BQXJCLEFBQWdCLEFBQVcsQUFDM0I7MEJBQWMsVUFBZCxBQUF3QixTQUFTLFVBQWpDLEFBQTJDLEFBQzVDO0FBQ0Y7QUFMRCxBQU1BO2lCQUFTLDBCQUFULEFBQVMsQUFBMEIsQUFDbkM7QUFDRDtBQWJILFNBY0UsaUJBQVMsQUFDUDtpQkFBUyx3QkFBVCxBQUFTLEFBQXdCLEFBQ2pDO0FBQ0Q7QUFqQkgsQUFtQkQ7QUF2QkQsQUFBTyxBQXdCUixLQXhCUTtBQURULEFBMEJEOzs7QUFFRCxBQUNBO0FBQWUsU0FBQSxBQUFTLHVCQUd0QjtNQUZBLEFBRUEsNEVBRlEsQUFFUjtNQURBLEFBQ0EsNkVBRFMsQUFDVCxBQUNBOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUNKLElBREksQUFDQSxjQURBLEFBQ2MsTUFEZCxBQUVKLElBRkksQUFFQSxXQUZBLEFBRVcsT0FGWCxBQUdKLElBSEksQUFHQSxTQUhBLEFBR1MsTUFIVCxBQUlKLElBSkksQUFJQSxRQUpQLEFBQU8sQUFJUSxBQUNqQjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFDSixJQURJLEFBQ0EsY0FEQSxBQUNjLE9BRGQsQUFFSixJQUZJLEFBRUEsV0FGQSxBQUVXLE1BRlgsQUFHSixJQUhJLEFBR0EsUUFBUSxPQUhmLEFBQU8sQUFHZSxBQUN4QjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFDSixJQURJLEFBQ0EsY0FEQSxBQUNjLE9BRGQsQUFFSixJQUZJLEFBRUEsV0FGQSxBQUVXLE9BRlgsQUFHSixJQUhJLEFBR0EsU0FBUyxPQUhoQixBQUFPLEFBR2dCLEFBQ3pCO0FBQ0U7YUFsQkosQUFrQkksQUFBTyxBQUVaIiwiZmlsZSI6IlJhd0RldGVjdGlvbnNTdGF0ZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==