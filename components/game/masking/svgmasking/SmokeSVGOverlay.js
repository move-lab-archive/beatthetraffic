import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BezierEasing from 'bezier-easing'

class SmokeSVGOverlay extends PureComponent {
  constructor (props) {
    super(props)

    // Can tweak that here easily: http://greweb.me/bezier-easing-editor/example/
    this.easing = BezierEasing(0.64, 0.12, 0.88, 0.74)
  }

  getPollutionOverlayStyle () {
    const pollutionPercentage = this.props.nbMissed * 100 / this.props.maxMissed
    let pollutionFillColor
    let pollutionOpacity = 0

    if (pollutionPercentage < 80) {
      pollutionFillColor = '#262626'
      pollutionOpacity = this.easing(pollutionPercentage / 100)
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
    const pollutionOverlayStyle = this.getPollutionOverlayStyle()

    return (
      <rect
        x='0'
        y='0'
        fill={pollutionOverlayStyle.pollutionFillColor}
        fillOpacity={pollutionOverlayStyle.pollutionOpacity}
        width={this.props.canvasResolution.w}
        height={this.props.canvasResolution.h}
      />
    )
  }
}

export default connect(state => {
  return {
    nbMissed: state.game.get('nbItemsMissed'),
    maxMissed: state.game.get('maxMissed'),
    canvasResolution: state.viewport.get('canvasResolution').toJS()
  }
})(SmokeSVGOverlay)
