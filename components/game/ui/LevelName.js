import React, { Component } from 'react'
import { connect } from 'react-redux'

class LevelName extends Component {
  render () {
    return (
      <div
        className={`level-name
        ${this.props.introAnimPlayed ? '' : 'hidden'}`}
      >
        <h4>{`${this.props.levelName} LEVEL ${this.props.levelNb}`}</h4>
        <style jsx>{`
          .level-name {
            position: fixed;
            bottom: 1.5rem;
            left: 2.9rem;
            color: white;
            z-index: 5;
            opacity: 1;
            transition: opacity 0.3s;
          }

          .hidden {
            opacity: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  const selectedVideo = state.app.get('availableVideos').find(video => {
    return video.get('name') === state.app.get('selectedVideo')
  })

  return {
    levelName: selectedVideo.get('levelName'),
    levelNb: selectedVideo.get('level'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(LevelName)
