import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getFirstFrameImgPath } from '../../../statemanagement/app/AppStateManagement'

import Button from '../../shared/Button'
import Loading from '../../shared/Loading'

class Landing extends Component {
  render () {
    return (
      <div className='game-landing'>
        <div className='text-landing'>
          Ready to beat the traffic of Stuttgart ?
        </div>
        {!this.props.isGameReadyToPlay && <Loading />}
        {this.props.isGameReadyToPlay && (
          <Button title='Start' large onClick={this.props.handleStart} />
        )}
        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background-image: url('${this.props.srcFirstFrame}');
            background-size: cover;
            background-color: #262626;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .text-landing {
            color: white;
            font-size: 5rem;
            text-align: center;
            padding: 2rem;
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

  const isGameReadyToPlay =
    state.objectTracker.get('fetched') && state.video.get('isReadyToPlay')

  return {
    srcFirstFrame: getFirstFrameImgPath(selectedVideo.get('name')),
    isGameReadyToPlay: isGameReadyToPlay
  }
})(Landing)
