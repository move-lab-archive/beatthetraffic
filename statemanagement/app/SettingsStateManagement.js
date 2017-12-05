import { fromJS } from 'immutable'
import SoundsManager from './SoundsManager'

// Initial state
const initialState = fromJS({
  showDebugUI: false,
  darkMode: false,
  soundEnabled: process.env.NODE_ENV === 'production', // disable sounds in dev mode by default
  //soundEnabled: true,
  isServerRendering: true
})

// Actions
const UPDATE_SETTINGS = 'Settings/UPDATE'

// TODO MOVE SOUND IN APP STATE MANAGEMENT
const SOUND_ON = 'Settings/SOUND_ON'
const SOUND_OFF = 'Settings/SOUND_OFF'

const SET_CLIENT_RENDERING = 'Settings/SET_CLIENT_RENDERING'

export function updateSettings (newSettings) {
  return {
    type: UPDATE_SETTINGS,
    payload: newSettings
  }
}

export function setClientRendering () {
  return {
    type: SET_CLIENT_RENDERING
  }
}

export function turnSoundOn () {
  return (dispatch, getState) => {
    SoundsManager.unMuteAll()

    dispatch({
      type: SOUND_ON
    })
  }
}

export function turnSoundOff () {
  return (dispatch, getState) => {
    SoundsManager.muteAll()

    dispatch({
      type: SOUND_OFF
    })
  }
}

// Reducer
export default function SettingsReducer (state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return state.merge(action.payload)
    case SOUND_ON:
      return state.set('soundEnabled', true)
    case SOUND_OFF:
      return state.set('soundEnabled', false)
    case SET_CLIENT_RENDERING:
      return state.set('isServerRendering', false)
    default:
      return state
  }
}
