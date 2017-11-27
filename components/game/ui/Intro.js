import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TweenLite } from 'gsap'
import SoundsManager from '../../../statemanagement/app/SoundsManager'

import { getFirstFrameImgPath } from '../../../statemanagement/app/AppStateManagement'

class Intro extends Component {
  componentDidMount () {
    SoundsManager.playSound('intro')
    TweenLite.to('.title-1', 0, { opacity: 1, delay: 0.2 })
    TweenLite.to('.title-1', 0, { opacity: 0, delay: 2 })
    TweenLite.to('.title-2', 0, { opacity: 1, delay: 2 })
    TweenLite.to('.title-2', 0, { opacity: 0, delay: 4 })
    TweenLite.to('.title-3', 0, { opacity: 1, delay: 4 })
    TweenLite.to('.title-3', 0, { opacity: 0, delay: 6 })
    TweenLite.to('.title-4', 0, { opacity: 1, delay: 6 })
    TweenLite.to('.title-4', 0, {
      opacity: 0,
      delay: 8,
      onComplete: () => this.props.onFinish()
    })
  }

  render () {
    return (
      <div className='game-landing'>
        <div className='title title-1'>BEAT</div>
        <div className='title title-2'>THE</div>
        <div className='title title-3'>TRAFFIC</div>
        <div className='title title-4'>STUTTGART</div>
        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background: transparent;
          }

          .title {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 9rem;
            line-height: 8rem;
            color: yellow;
            max-width: 95%;
            word-wrap: break-word;
            text-align: center;
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
    srcFirstFrame: getFirstFrameImgPath(selectedVideo.get('name'))
  }
})(Intro)
