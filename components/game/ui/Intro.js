import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TimelineLite } from 'gsap'
import SoundsManager from '../../../statemanagement/app/SoundsManager'

import LeftCloud from './landing/LeftCloud'
import RightCloud from './landing/RightCloud'

import { getFirstFrameImgPath } from '../../../statemanagement/app/AppStateManagement'

class Intro extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animateOut: false
    }
  }

  componentDidMount () {
    SoundsManager.playSound('intro')

    const timeline = new TimelineLite({
      onComplete: () => {
        const cloudAnimationOutDuration = 1
        this.setState({
          animateOut: true
        })
        this.props.onFinish(cloudAnimationOutDuration)
      }
    })

    timeline
      .to('.beat', 0, { opacity: 1 })
      .to('.beat', 0, { opacity: 0 }, '+=2')
      .to('.the', 0, { opacity: 1 })
      .to('.the', 0, { opacity: 0 }, '+=2') // 4s in music
      .to('.traffic', 0, { opacity: 1 })
      .to('.traffic', 0, { opacity: 0 }, '+=1.8') // 5.8s in music
      .to('.location', 0, { opacity: 1 })
      .to('.location', 0, { opacity: 0 }, '+=1.2') // 7s in music
      .to('.catch', 0, { opacity: 1 })
      .to('.catch', 0, { opacity: 0 }, '+=0.8') // 7.8s in music

    timeline.play()
  }

  render () {
    return (
      <div className='game-landing'>
        <LeftCloud animateOut={this.state.animateOut} />
        <RightCloud animateOut={this.state.animateOut} />
        <div className='title beat'>Beat</div>
        <div className='title the'>The</div>
        <div className='title traffic'>Traffic</div>
        <div className='title location'>
          Stutt<br />gart
        </div>
        <div className='title catch'>
          Catch<br />the<br />cars!!!
        </div>
        <style jsx>{`
          .game-landing {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            background: transparent;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-drag: none;
          }

          .title {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 9rem;
            line-height: 8rem;
            color: yellow;
            max-width: 95%;
            word-wrap: break-word;
            text-align: center;
            opacity: 0;
          }

          .beat {
            font-size: 12rem;
            color: #ff3bff;
          }
          .the {
            font-size: 15rem;
          }
          .traffic {
            font-size: 10rem;
            color: #4effff;
          }
          .location {
            font-size: 11rem;
            color: #ff3bff;
          }
          .catch {
            font-size: 11rem;
            color: #4effff;
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
