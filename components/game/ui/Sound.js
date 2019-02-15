import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  turnSoundOn,
  turnSoundOff
} from '../../../statemanagement/app/SettingsStateManagement'
import { prefixURL } from '../../../utils/url';

class Sound extends Component {
  constructor(props) {
    super(props)

    this.toggleSound = this.toggleSound.bind(this)

    // Init
    if (props.soundEnabled) {
      props.dispatch(turnSoundOn())
    } else {
      props.dispatch(turnSoundOff())
    }
  }

  toggleSound() {
    if (this.props.soundEnabled) {
      this.props.dispatch(turnSoundOff())
    } else {
      this.props.dispatch(turnSoundOn())
    }
  }

  componentDidMount() {
    // Prefetch sound on / off image depending on enabled / disabled
    const soundPrefetch = new Image()
    soundPrefetch.src = prefixURL(`/static/assets/icons/icon-sound-${
      this.props.soundEnabled ? 'off' : 'on'
      }.svg`)
  }

  render() {
    return (
      <div
        className={`audio-button ${this.props.soundEnabled ? 'on' : 'off'}`}
        onClick={this.toggleSound}
      >
        <style jsx>{`
          .audio-button {
            position: fixed;
            bottom: 2.7rem;
            right: 1.9rem;
            z-index: 9;
            width: 4.4rem;
            height: 4.4rem;
            cursor: pointer;
            border-radius: 0.2rem;
            background-repeat: no-repeat;
            background-size: 3rem;
            background-position: center;
          }

          .audio-button.on {
          background-image: url(${prefixURL("/static/assets/icons/icon-sound-on.svg")});
          }

          .audio-button.off {
            background-image: url(${prefixURL("/static/assets/icons/icon-sound-off.svg")});
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    soundEnabled: state.settings.get('soundEnabled')
  }
})(Sound)
