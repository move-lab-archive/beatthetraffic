import React, { Component } from 'react'
import { connect } from 'react-redux'
import raf from 'raf'

import Clippath from './svgmasking/Clippath'
import SmokeSVGOverlay from './svgmasking/SmokeSVGOverlay'

import { enlargeBbox } from '../../../utils/resolution'

import { getAverageImgPath } from '../../../statemanagement/app/AppStateManagement'

import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'

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

    this.previousMaskedItemSize = 0
  }

  componentWillReceiveProps (nextProps) {
    if (
      nextProps.isPlaying === true &&
      nextProps.isObjectTrackerDataFetched === true
    ) {
      if (!this.isUpdatingMasks) {
        // console.log('Start loop update masks')
        this.isUpdatingMasks = true
        this.loopUpdateMasks()
      }
    }

    if (nextProps.selectedVideoName !== this.props.selectedVideoName) {
      // console.log('Changed level, need to clear up masking canvas')
      this.setState(initialState)
    }

    if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
      // console.log('Level reset, need to clear up masking canvas')
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
            ...enlargeBbox(mask, 50)
          }
        }
      )

      let elem, clipPath

      maskedItemsThisFrame.forEach((maskedItem, index) => {
        elem = document.getElementById(`mask-${index}`)
        if (elem) {
          elem.setAttribute('width', maskedItem.w)
          elem.setAttribute('height', maskedItem.h)
          elem.setAttribute('x', maskedItem.x)
          elem.setAttribute('y', maskedItem.y)
        }

        // This is not working, appending the child but it is then not visible ... weird
        // Workaround is to insert 20 div in the DOM as we won't mask more than this
        // else {
        //   elem = document.createElement('rect')
        //   elem.setAttribute('id', `mask-${index}`)
        //   elem.setAttribute('x', Math.floor(maskedItem.x))
        //   elem.setAttribute('y', Math.floor(maskedItem.y))
        //   elem.setAttribute('stroke', '#000000')
        //   elem.setAttribute('stroke-miterlimit', '10')
        //   elem.setAttribute('rx', '5')
        //   elem.setAttribute('ry', '5')
        //   elem.setAttribute('width', Math.floor(maskedItem.w))
        //   elem.setAttribute('height', Math.floor(maskedItem.h))
        //   clipPath = document.getElementById('svgPath')
        //   clipPath.appendChild(elem)
        // }
      })

      if (this.previousMaskedItemSize > maskedItemsThisFrame.length) {
        // Reset masks that are not reused from previous frame
        for (
          let index = maskedItemsThisFrame.length;
          index < this.previousMaskedItemSize;
          index++
        ) {
          elem = document.getElementById(`mask-${index}`)
          // console.log(elem)
          if (elem) {
            elem.setAttribute('width', 0)
            elem.setAttribute('height', 0)
            elem.setAttribute('x', 0)
            elem.setAttribute('y', 0)
          }
        }
      }

      this.previousMaskedItemSize = maskedItemsThisFrame.length
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
          viewBox={`0 0 ${this.props.canvasResolution.w} ${
            this.props.canvasResolution.h
          }`}
          className={`average-img`}
        >
          <image
            xlinkHref={this.props.averageImgSrc}
            x='0'
            y='0'
            width={`${this.props.canvasResolution.w}px`}
            height={`${this.props.canvasResolution.h}px`}
            clipPath='url(#svgPath)'
          />
          <SmokeSVGOverlay />
          <defs>
            <clipPath id='svgPath'>
              {Array(20)
                .fill(1)
                .map((value, index) => (
                  <rect
                    id={`mask-${index}`}
                    x='0'
                    y='0'
                    stroke='#000000'
                    strokeMiterlimit='10'
                    rx='5'
                    ry='5'
                    width='0'
                    height='0'
                  />
                ))}
            </clipPath>
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
    averageImgSrc: getAverageImgPath(selectedVideo.get('name')),
    canvasResolution: state.viewport.get('canvasResolution').toJS()
  }
})(SVGMasking)
