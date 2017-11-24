import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ButtonClose extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render() {
    return (
      <div className="btn-close" onClick={this.props.onClick}>
        <style jsx>{`
          .btn-close {
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 2.4rem;
            height: 2.4rem;
            cursor: pointer;
            background-image: url('/static/assets/icons/icon-close.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
          }
        `}</style>
      </div>
    )
  }
}

export default ButtonClose
