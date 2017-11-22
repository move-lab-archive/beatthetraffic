import React, { Component } from 'react'
import { connect } from 'react-redux'
import raf from 'raf'

import Clippath from './svgmasking/Clippath'
import SmokeSVGOverlay from './svgmasking/SmokeSVGOverlay'

import { enlargeBbox } from '../../../utils/resolution'

import { getAverageImgPath } from '../../../statemanagement/app/AppStateManagement'

import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'

const ENLARGE_SIZE = 25

const initialState = {
  masks: []
}

class SVGMasking extends Component {
  constructor (props) {
    super(props)

    this.state = initialState

    this.isUpdatingMasks = false
    this.lastFrameDrawn = -1
    this.loopUpdateMasks = this.loopUpdateMasks.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (
      nextProps.isPlaying === true &&
      nextProps.isObjectTrackerDataFetched === true
    ) {
      if (!this.isUpdatingMasks) {
        console.log('Start loop update masks')
        this.isUpdatingMasks = true
        this.loopUpdateMasks()
      }
    }

    if (nextProps.selectedVideoName !== this.props.selectedVideoName) {
      console.log('Changed level, need to clear up masking canvas')
      this.setState(initialState)
    }

    if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
      console.log('Level reset, need to clear up masking canvas')
      this.setState(initialState)
    }
  }

  loopUpdateMasks () {
    if (this.lastFrameDrawn !== GameEngineStateManager.getCurrentFrame()) {
      this.lastFrameDrawn = GameEngineStateManager.getCurrentFrame()
      const maskedItemsThisFrame = GameEngineStateManager.getItemsMasked().map(
        mask => {
          return {
            ...mask,
            ...enlargeBbox(mask, ENLARGE_SIZE)
          }
        }
      )
      this.setState({ masks: maskedItemsThisFrame })
    }
    raf(this.loopUpdateMasks.bind(this))
  }

  getPollutionOverlayStyle () {
    const pollutionPercentage = this.props.nbMissed * 100 / this.props.maxMissed
    let pollutionFillColor
    let pollutionOpacity = 0

    if (pollutionPercentage < 80) {
      pollutionFillColor = '#262626'
      pollutionOpacity = pollutionPercentage / 100
    } else {
      pollutionFillColor = '#FF0000'
      pollutionOpacity = 0.4
    }

    return {
      pollutionFillColor,
      pollutionOpacity
    }
  }

  render () {
    return (
      <div className='mask-container'>
        <svg
          id='average-img'
          preserveAspectRatio='xMinYMax meet'
          viewBox='0 0 1280 720'
          className={`average-img`}
        >
          <image
            xlinkHref={this.props.averageImgSrc}
            x='0'
            y='0'
            width='1280px'
            height='720px'
            clipPath='url(#svgPath)'
          />
          <SmokeSVGOverlay />
          {/* {this.state.masks.map(mask => (
            <image
              key={`${mask.id}-unicorn`}
              x={mask.x + mask.w / 2 - this.getUnicornSize(mask) / 2}
              y={mask.y + mask.h / 2 - this.getUnicornSize(mask) / 2}
              width={this.getUnicornSize(mask)}
              height={this.getUnicornSize(mask)}
              xlinkHref='/static/assets/icons/icon-unicorn.svg'
            />
          ))} */}
          <defs>
            <Clippath masks={this.state.masks} />
          </defs>
        </svg>
        <style jsx>{`
          .mask-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            will-change: auto;
          }
          .average-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            overflow: hidden;
          }

          @media (min-aspect-ratio: 16/9) {
            .average-img {
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .average-img {
              width: auto;
              height: 100%;
            }
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
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    averageImgSrc: getAverageImgPath(selectedVideo.get('name'))
  }
})(SVGMasking)
