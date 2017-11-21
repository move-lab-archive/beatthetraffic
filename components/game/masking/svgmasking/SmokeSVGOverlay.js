import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class SmokeSVGOverlay extends PureComponent {
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
    const pollutionOverlayStyle = this.getPollutionOverlayStyle()

    return (
      <rect
        x='0'
        y='0'
        fill={pollutionOverlayStyle.pollutionFillColor}
        fillOpacity={pollutionOverlayStyle.pollutionOpacity}
        width='1280'
        height='720'
      />
    )
  }
}

export default connect(state => {
  return {
    nbMissed: state.game.get('nbItemsMissed'),
    maxMissed: state.game.get('maxMissed')
  }
})(SmokeSVGOverlay)
