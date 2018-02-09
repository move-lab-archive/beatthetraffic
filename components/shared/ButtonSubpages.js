import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ButtonSubpages extends Component {
  static propTypes = {
    title: PropTypes.string,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    bgBlack: PropTypes.bool
  }

  static defaultProps = {
    disabled: false
  }

  handleClick () {
    if (!this.props.disabled) {
      this.props.onClick()
    }
  }

  render () {
    return (
      <a
        className={`btn
          ${this.props.large ? 'large' : ''}
          ${this.props.bgBlack ? 'bg-black' : ''}
        `}
        onClick={() => this.handleClick()}
      >
        <div className='inner' />
        <div className='outer'>
          <h4>{this.props.title}</h4>
        </div>

        <style jsx>{`
          .btn {
            width: 10.5rem;
            height: 4rem;
            will-change: transform;
            color: #262626;
            margin-top: 2rem;
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
          }
          .btn h4 {
            margin: 0;
          }
          .btn .inner {
            width: 100%;
            height: 100%;
            left: 5px;
            top: 5px;
            background-color: #262626;
            position: absolute;
          }

          .btn.bg-black .inner {
            background-color: black;
          }

          .btn .outer {
            width: 100%;
            height: 100%;
            background-color: #4effff;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            transform-origin: 0 0;
          }

          .btn .outer:hover {
            background-color: #ff3bff;
            cursor: pointer;
          }

          .btn .outer:active {
            background-color: #ff3bff;
            left: 2px;
            top: 2px;
          }

          .large {
            width: 20rem;
            height: 6rem;
          }

          .large h4 {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 3.4rem;
            text-transform: uppercase;
          }
        `}</style>
      </a>
    )
  }
}

export default ButtonSubpages
