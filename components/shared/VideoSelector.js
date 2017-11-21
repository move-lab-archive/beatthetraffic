import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectVideo } from '../../statemanagement/app/AppStateManagement'

class VideoSelector extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    window.scrollTo(0, 0)
    this.props.dispatch(selectVideo(event.target.value))
  }

  render () {
    return (
      <div className='video-selector'>
        <select
          name='video'
          value={this.props.selectedVideo}
          onChange={this.onChange}
        >
          {this.props.availableVideos.map(availableVideo => (
            <option
              key={availableVideo.get('name')}
              value={availableVideo.get('name')}
            >
              {availableVideo.get('name')}
            </option>
          ))}
        </select>
        <style jsx>{`
          .video-selector {
            position: fixed;
            z-index: 10;
            top: 0.5rem;
            left: 0.5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    selectedVideo: state.app.get('selectedVideo'),
    availableVideos: state.app.get('availableVideos')
  }
})(VideoSelector)
