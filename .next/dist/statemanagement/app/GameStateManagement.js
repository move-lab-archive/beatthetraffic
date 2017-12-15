'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementScore = incrementScore;
exports.resetScore = resetScore;
exports.addMissedItem = addMissedItem;
exports.removeMissedItem = removeMissedItem;
exports.collectItem = collectItem;
exports.addKilledItem = addKilledItem;
exports.startLevel = startLevel;
exports.failedLevel = failedLevel;
exports.retry = retry;
exports.levelFinished = levelFinished;
exports.setCurrentLevel = setCurrentLevel;
exports.loadCity = loadCity;
exports.loadLevel = loadLevel;
exports.updateUrlToMatchLevelAndCity = updateUrlToMatchLevelAndCity;
exports.getSmokeLevel = getSmokeLevel;
exports.default = GameReducer;

var _immutable = require('immutable');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _VideoStateManagement = require('./VideoStateManagement');

var _AppStateManagement = require('./AppStateManagement');

var _SoundsManager = require('./SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

var _GameEngineStateManager = require('./GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial state
var initialState = (0, _immutable.fromJS)({
  score: 0,
  killedItems: [],
  nbItemsMissed: 0,
  maxMissed: 20,
  currentLevel: 1,
  isPlaying: false,
  finished: false,
  failed: false,
  nbTotalLevel: 3
});

// Actions
var INCREMENT_SCORE = 'Game/INCREMENT_SCORE';
var RESET_SCORE = 'Game/RESET_SCORE';

var ADD_MISSED_ITEM = 'Game/ADD_MISSED_ITEM';
var REMOVE_MISSED_ITEM = 'Game/REMOVE_MISSED_ITEM';
var ADD_KILLED_ITEM = 'Game/ADD_KILLED_ITEM';

var START_LEVEL = 'Game/START_LEVEL';
var FAILED_LEVEL = 'Game/FAILED_LEVEL';
var RETRY = 'Game/RETRY';
var FINISHED_LEVEL = 'Game/FINISHED_LEVEL';
var SET_CURRENT_LEVEL = 'Game/SET_CURRENT_LEVEL';

function incrementScore() {
  return {
    type: INCREMENT_SCORE
  };
}

function resetScore() {
  return {
    type: RESET_SCORE
  };
}

function addMissedItem() {
  return function (dispatch, getState) {
    dispatch({
      type: ADD_MISSED_ITEM
    });

    _SoundsManager2.default.playSound('carmissed');

    // Check is we haven't failed the level
    if (getState().game.get('nbItemsMissed') >= getState().game.get('maxMissed')) {
      dispatch(failedLevel());
    }
  };
}

function removeMissedItem() {
  return {
    type: REMOVE_MISSED_ITEM
  };
}

function collectItem(itemToCollect) {
  return function (dispatch, getState) {
    itemToCollect.collect();
    if (itemToCollect.type === 'banana' || itemToCollect.type === 'carrot') {
      dispatch(incrementScore());
      _SoundsManager2.default.playSound('win-point-withitem');
    } else {
      dispatch(removeMissedItem());
      _SoundsManager2.default.playSound('healthrecovery');
    }
  };
}

function addKilledItem(id, objectToOutput) {
  return function (dispatch, getState) {
    dispatch({
      type: ADD_KILLED_ITEM,
      payload: id
    });
    dispatch(incrementScore());
    if (!objectToOutput) {
      _SoundsManager2.default.playSound('carhit');
    } else {
      _SoundsManager2.default.playSound('carhitandpopitem');
    }
  };
}

function startLevel() {
  return function (dispatch, getState) {
    _GameEngineStateManager2.default.reset();

    // TODO Maybe move to the dispatch of the UI, so we keep consistent
    // that all sound triggering are done from the views
    var currentPollutionPercentage = getState().game.get('nbItemsMissed') * 100 / getState().game.get('maxMissed');
    if (currentPollutionPercentage < 50) {
      _SoundsManager2.default.playSound('main_level' + getState().game.get('currentLevel'));
    } else if (currentPollutionPercentage >= 50 && currentPollutionPercentage < 80) {
      _SoundsManager2.default.playSound('main_level' + getState().game.get('currentLevel'), 1.2);
    } else {
      _SoundsManager2.default.playSound('alert');
    }

    // Notify UI we are starting the level
    dispatch({
      type: START_LEVEL
    });

    // Play the video
    if (!getState().video.isPlaying) {
      dispatch((0, _VideoStateManagement.playVideo)());
    }
  };
}

function failedLevel() {
  return function (dispatch, getState) {
    // Notify UI we are starting the level
    dispatch({
      type: FAILED_LEVEL
    });

    // Stop the video
    dispatch((0, _VideoStateManagement.pauseVideo)());
  };
}

function retry() {
  return function (dispatch, getState) {
    if (getState().game.get('currentLevel') === 1) {
      // Reset the video
      dispatch((0, _VideoStateManagement.resetVideo)());
    } else {
      dispatch(loadLevel(1));
    }

    // Notify UI we are re-starting the game
    dispatch({
      type: RETRY
    });
  };
}

function levelFinished() {
  return {
    type: FINISHED_LEVEL
  };
}

function setCurrentLevel(level) {
  return {
    type: SET_CURRENT_LEVEL,
    payload: level
  };
}

function loadCity(city) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return function (dispatch, getState) {
    // Select city
    dispatch((0, _AppStateManagement.selectCity)(city));
    dispatch(loadLevel(level));

    // Update url
    // TODO maybe refactor later and have a URL manager file
    if (!getState().settings.get('isServerRendering')) {
      _index2.default.replace('/', '/' + city + '/level/' + level, { shallow: true });
    }
  };
}

function loadLevel(level) {
  return function (dispatch, getState) {
    // Select video for that level
    dispatch((0, _AppStateManagement.selectVideoForLevel)(level));
    dispatch(setCurrentLevel(level));

    // Update url
    // TODO maybe refactor later and have a URL manager module
    if (!getState().settings.get('isServerRendering')) {
      _index2.default.push('/', '/' + getState().app.get('selectedCity') + '/level/' + level, { shallow: true });
    }
  };
}

function updateUrlToMatchLevelAndCity() {
  return function (dispatch, getState) {
    _index2.default.push('/', '/' + getState().app.get('selectedCity') + '/level/' + getState().game.get('currentLevel'), { shallow: true });
  };
}

// Helper, get smoke level
function getSmokeLevel(nbMissed, maxMissed) {
  return nbMissed * 100 / maxMissed;
}

// Reducer
function GameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case INCREMENT_SCORE:
      return state.set('score', state.get('score') + 1);
    case RESET_SCORE:
      return state.set('score', 0);
    case ADD_MISSED_ITEM:
      return state.set('nbItemsMissed', state.get('nbItemsMissed') + 1);
    case REMOVE_MISSED_ITEM:
      // Cannot go lower than 0
      var nbItemsMissed = state.get('nbItemsMissed') - 1;
      if (nbItemsMissed < 0) {
        nbItemsMissed = 0;
      }
      return state.set('nbItemsMissed', nbItemsMissed);
    case ADD_KILLED_ITEM:
      return state.update('killedItems', function (killedItems) {
        return killedItems.push(action.payload);
      });
    case START_LEVEL:
      return state.set('isPlaying', true).set('failed', false).set('finished', false);
    case FAILED_LEVEL:
      return state.set('failed', true).set('isPlaying', false);
    case FINISHED_LEVEL:
      return state.set('finished', true).set('isPlaying', false);
    case SET_CURRENT_LEVEL:
      return state.set('currentLevel', action.payload).set('isPlaying', false).set('finished', false).set('failed', false).set('nbItemsMissed', 0); // reset smoke bar
    case RETRY:
      return state.merge(initialState);
    default:
      return state;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvR2FtZVN0YXRlTWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJmcm9tSlMiLCJSb3V0ZXIiLCJwbGF5VmlkZW8iLCJwYXVzZVZpZGVvIiwicmVzZXRWaWRlbyIsInNlbGVjdFZpZGVvRm9yTGV2ZWwiLCJzZWxlY3RDaXR5IiwiU291bmRzTWFuYWdlciIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJpbml0aWFsU3RhdGUiLCJzY29yZSIsImtpbGxlZEl0ZW1zIiwibmJJdGVtc01pc3NlZCIsIm1heE1pc3NlZCIsImN1cnJlbnRMZXZlbCIsImlzUGxheWluZyIsImZpbmlzaGVkIiwiZmFpbGVkIiwibmJUb3RhbExldmVsIiwiSU5DUkVNRU5UX1NDT1JFIiwiUkVTRVRfU0NPUkUiLCJBRERfTUlTU0VEX0lURU0iLCJSRU1PVkVfTUlTU0VEX0lURU0iLCJBRERfS0lMTEVEX0lURU0iLCJTVEFSVF9MRVZFTCIsIkZBSUxFRF9MRVZFTCIsIlJFVFJZIiwiRklOSVNIRURfTEVWRUwiLCJTRVRfQ1VSUkVOVF9MRVZFTCIsImluY3JlbWVudFNjb3JlIiwidHlwZSIsInJlc2V0U2NvcmUiLCJhZGRNaXNzZWRJdGVtIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInBsYXlTb3VuZCIsImdhbWUiLCJnZXQiLCJmYWlsZWRMZXZlbCIsInJlbW92ZU1pc3NlZEl0ZW0iLCJjb2xsZWN0SXRlbSIsIml0ZW1Ub0NvbGxlY3QiLCJjb2xsZWN0IiwiYWRkS2lsbGVkSXRlbSIsImlkIiwib2JqZWN0VG9PdXRwdXQiLCJwYXlsb2FkIiwic3RhcnRMZXZlbCIsInJlc2V0IiwiY3VycmVudFBvbGx1dGlvblBlcmNlbnRhZ2UiLCJ2aWRlbyIsInJldHJ5IiwibG9hZExldmVsIiwibGV2ZWxGaW5pc2hlZCIsInNldEN1cnJlbnRMZXZlbCIsImxldmVsIiwibG9hZENpdHkiLCJjaXR5Iiwic2V0dGluZ3MiLCJyZXBsYWNlIiwic2hhbGxvdyIsInB1c2giLCJhcHAiLCJ1cGRhdGVVcmxUb01hdGNoTGV2ZWxBbmRDaXR5IiwiZ2V0U21va2VMZXZlbCIsIm5iTWlzc2VkIiwiR2FtZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNldCIsInVwZGF0ZSIsIm1lcmdlIl0sIm1hcHBpbmdzIjoiOzs7OztRQW9DTyxBQUFTO1FBTVQsQUFBUztRQU1ULEFBQVM7UUFpQlQsQUFBUztRQU1ULEFBQVM7UUFhVCxBQUFTO1FBZVQsQUFBUztRQXNDVCxBQUFTO1FBWVQsQUFBUztRQWdCVCxBQUFTO1FBTVQsQUFBUztRQU9ULEFBQVM7UUFjVCxBQUFTO1FBa0JULEFBQVM7UUFhVCxBQUFTOzs7QUEvTmhCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQVMsQUFBVyxBQUFZLEFBQWtCOztBQUNsRCxBQUFTLEFBQXFCLEFBQWtCOztBQUVoRCxBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBNEI7Ozs7OztBQUVuQztBQUNBLElBQU07U0FBc0IsQUFDbkIsQUFDUDtlQUYwQixBQUViLEFBQ2I7aUJBSDBCLEFBR1gsQUFDZjthQUowQixBQUlmLEFBQ1g7Z0JBTDBCLEFBS1osQUFDZDthQU4wQixBQU1mLEFBQ1g7WUFQMEIsQUFPaEIsQUFDVjtVQVIwQixBQVFsQixBQUNSO2dCQVRGLEFBQXFCLEFBQU8sQUFTWjtBQVRZLEFBQzFCLENBRG1COztBQVlyQjtBQUNBLElBQU0sa0JBQU4sQUFBd0I7QUFDeEIsSUFBTSxjQUFOLEFBQW9COztBQUVwQixJQUFNLGtCQUFOLEFBQXdCO0FBQ3hCLElBQU0scUJBQU4sQUFBMkI7QUFDM0IsSUFBTSxrQkFBTixBQUF3Qjs7QUFFeEIsSUFBTSxjQUFOLEFBQW9CO0FBQ3BCLElBQU0sZUFBTixBQUFxQjtBQUNyQixJQUFNLFFBQU4sQUFBYztBQUNkLElBQU0saUJBQU4sQUFBdUI7QUFDdkIsSUFBTSxvQkFBTixBQUEwQixBQUUxQjs7QUFBTywwQkFBMkIsQUFDaEM7O1VBQUEsQUFBTyxBQUNDLEFBRVQ7QUFIUSxBQUNMO0FBSUo7O0FBQU8sc0JB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QUhQLEFBQU8sQUFHWSxBQUNyQjtTQUFBLEFBQUssQUFDSDthQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsVUFBVixBQUFvQixNQUFwQixBQUEwQixJQUExQixBQUE4QixhQUFyQyxBQUFPLEFBQTJDLEFBQ3BEO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxZQUFWLEFBQXNCLE1BQXRCLEFBQTRCLElBQTVCLEFBQWdDLGFBQXZDLEFBQU8sQUFBNkMsQUFDdEQ7U0FBQSxBQUFLLEFBQ0g7YUFBTyxNQUFBLEFBQ0osSUFESSxBQUNBLGdCQUFnQixPQURoQixBQUN1QixTQUR2QixBQUVKLElBRkksQUFFQSxhQUZBLEFBRWEsT0FGYixBQUdKLElBSEksQUFHQSxZQUhBLEFBR1ksT0FIWixBQUlKLElBSkksQUFJQSxVQUpBLEFBSVUsT0FKVixBQUtKLElBTEksQUFLQSxpQkFqQ1gsQUE0QkksQUFBTyxBQUtpQixJQUFHLEFBQzdCO1NBQUEsQUFBSyxBQUNIO2FBQU8sTUFBQSxBQUFNLE1BQWIsQUFBTyxBQUFZLEFBQ3JCO0FBQ0U7YUFyQ0osQUFxQ0ksQUFBTyxBQUVaIiwiZmlsZSI6IkdhbWVTdGF0ZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==