import { fromJS } from 'immutable'
import Router from 'next/router'

import { playVideo, pauseVideo, resetVideo } from './VideoStateManagement'
import { selectVideoForLevel, selectCity } from './AppStateManagement'

import SoundsManager from './SoundsManager'
import GameEngineStateManager from './GameEngineStateManager'

// Initial state
const initialState = fromJS({
  score: 0,
  killedItems: [],
  nbItemsMissed: 0,
  maxMissed: 20,
  currentLevel: 1,
  isPlaying: false,
  finished: false,
  failed: false,
  nbTotalLevel: 3
})

// Actions
const INCREMENT_SCORE = 'Game/INCREMENT_SCORE'
const RESET_SCORE = 'Game/RESET_SCORE'

const ADD_MISSED_ITEM = 'Game/ADD_MISSED_ITEM'
const REMOVE_MISSED_ITEM = 'Game/REMOVE_MISSED_ITEM'
const ADD_KILLED_ITEM = 'Game/ADD_KILLED_ITEM'

const START_LEVEL = 'Game/START_LEVEL'
const FAILED_LEVEL = 'Game/FAILED_LEVEL'
const RETRY = 'Game/RETRY'
const FINISHED_LEVEL = 'Game/FINISHED_LEVEL'
const SET_CURRENT_LEVEL = 'Game/SET_CURRENT_LEVEL'

export function incrementScore () {
  return {
    type: INCREMENT_SCORE
  }
}

export function resetScore () {
  return {
    type: RESET_SCORE
  }
}

export function addMissedItem () {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_MISSED_ITEM
    })

    SoundsManager.playSound('carmissed')

    // Check is we haven't failed the level
    if (
      getState().game.get('nbItemsMissed') >= getState().game.get('maxMissed')
    ) {
      dispatch(failedLevel())
    }
  }
}

export function removeMissedItem () {
  return {
    type: REMOVE_MISSED_ITEM
  }
}

export function collectItem (itemToCollect) {
  return (dispatch, getState) => {
    itemToCollect.collect()
    if (itemToCollect.type === 'banana' || itemToCollect.type === 'carrot') {
      dispatch(incrementScore())
      SoundsManager.playSound('win-point-withitem')
    } else {
      dispatch(removeMissedItem())
      SoundsManager.playSound('healthrecovery')
    }
  }
}

export function addKilledItem (id, objectToOutput) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_KILLED_ITEM,
      payload: id
    })
    dispatch(incrementScore())
    if (!objectToOutput) {
      SoundsManager.playSound('carhit')
    } else {
      SoundsManager.playSound('carhitandpopitem')
    }
  }
}

export function startLevel () {
  return (dispatch, getState) => {
    GameEngineStateManager.reset()

    // TODO Maybe move to the dispatch of the UI, so we keep consistent
    // that all sound triggering are done from the views
    const currentPollutionPercentage =
      getState().game.get('nbItemsMissed') *
      100 /
      getState().game.get('maxMissed')
    if (currentPollutionPercentage < 50) {
      SoundsManager.playSound(
        `main_level${getState().game.get('currentLevel')}`
      )
    } else if (
      currentPollutionPercentage >= 50 &&
      currentPollutionPercentage < 80
    ) {
      SoundsManager.playSound(
        `main_level${getState().game.get('currentLevel')}`,
        1.2
      )
    } else {
      SoundsManager.playSound('alert')
    }

    // Notify UI we are starting the level
    dispatch({
      type: START_LEVEL
    })

    // Play the video
    dispatch(playVideo())
  }
}

export function failedLevel () {
  return (dispatch, getState) => {
    // Notify UI we are starting the level
    dispatch({
      type: FAILED_LEVEL
    })

    // Stop the video
    dispatch(pauseVideo())
  }
}

export function retry () {
  return (dispatch, getState) => {
    if (getState().game.get('currentLevel') === 1) {
      // Reset the video
      dispatch(resetVideo())
    } else {
      dispatch(loadLevel(1))
    }

    // Notify UI we are re-starting the game
    dispatch({
      type: RETRY
    })
  }
}

export function levelFinished () {
  return {
    type: FINISHED_LEVEL
  }
}

export function setCurrentLevel (level) {
  return {
    type: SET_CURRENT_LEVEL,
    payload: level
  }
}

export function loadCity (city, level = 1) {
  return (dispatch, getState) => {
    // Select city
    dispatch(selectCity(city))
    dispatch(loadLevel(level))

    // Update url
    // TODO maybe refactor later and have a URL manager file
    if (!getState().settings.get('isServerRendering')) {
      Router.replace(`/`, `/${city}/level/${level}`, { shallow: true })
    }
  }
}

export function loadLevel (level) {
  return (dispatch, getState) => {
    // Select video for that level
    dispatch(selectVideoForLevel(level))
    dispatch(setCurrentLevel(level))

    // Update url
    // TODO maybe refactor later and have a URL manager module
    if (!getState().settings.get('isServerRendering')) {
      Router.push(
        '/',
        `/${getState().app.get('selectedCity')}/level/${level}`,
        { shallow: true }
      )
    }
  }
}

export function updateUrlToMatchLevelAndCity () {
  return (dispatch, getState) => {
    Router.push(
      '/',
      `/${getState().app.get('selectedCity')}/level/${getState().game.get(
        'currentLevel'
      )}`,
      { shallow: true }
    )
  }
}

// Helper, get smoke level
export function getSmokeLevel (nbMissed, maxMissed) {
  return nbMissed * 100 / maxMissed
}

// Reducer
export default function GameReducer (state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return state.set('score', state.get('score') + 1)
    case RESET_SCORE:
      return state.set('score', 0)
    case ADD_MISSED_ITEM:
      return state.set('nbItemsMissed', state.get('nbItemsMissed') + 1)
    case REMOVE_MISSED_ITEM:
      // Cannot go lower than 0
      let nbItemsMissed = state.get('nbItemsMissed') - 1
      if (nbItemsMissed < 0) {
        nbItemsMissed = 0
      }
      return state.set('nbItemsMissed', nbItemsMissed)
    case ADD_KILLED_ITEM:
      return state.update('killedItems', killedItems =>
        killedItems.push(action.payload)
      )
    case START_LEVEL:
      return state
        .set('isPlaying', true)
        .set('failed', false)
        .set('finished', false)
    case FAILED_LEVEL:
      return state.set('failed', true).set('isPlaying', false)
    case FINISHED_LEVEL:
      return state.set('finished', true).set('isPlaying', false)
    case SET_CURRENT_LEVEL:
      return state
        .set('currentLevel', action.payload)
        .set('isPlaying', false)
        .set('finished', false)
        .set('failed', false)
        .set('nbItemsMissed', 0) // reset smoke bar
    case RETRY:
      return state.merge(initialState)
    default:
      return state
  }
}
