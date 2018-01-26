import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ButtonClose extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    smallPadding: PropTypes.bool
  }

  render () {
    return (
      <div
        className={`btn-close ${
          this.props.smallPadding ? 'small-padding' : ''
        }`}
        onClick={this.props.onClick}
      >
        <div className='inner' />
        <div className='outer'>
          <img src='/static/assets/icons/icon-close.svg' />
        </div>

        <style jsx>{`
          .btn-close {
            position: absolute;
            top: 2.6rem;
            right: 2.6rem;
            width: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 10;
          }

          .btn-close.small-padding {
            top: 1.9rem;
            right: 1.9rem;
          }

          .btn-close .inner {
            width: 100%;
            height: 100%;
            left: 4px;
            top: 4px;
            background-color: #262626;
            position: absolute;
          }
          .btn-close .outer {
            width: 100%;
            height: 100%;
            background-color: #4effff;
            position: absolute;
          }
          .btn-close .outer img {
            top: 6.75px;
            left: 6.25px;
            position: absolute;
          }
          .btn-close .outer:hover {
            background-color: #ff3bff;
            cursor: pointer;
          }

          .btn-close .outer:active {
            background-color: #ff3bff;
            left: 1px;
            top: 1px;
          }
        `}</style>
      </div>
    )
  }
}

export default ButtonClose
