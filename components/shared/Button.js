import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    title: PropTypes.string,
    large: PropTypes.bool,
    buttonLevelBeginning: PropTypes.bool,
    transparent: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    return (
      <a
        className={this.props.large ? "large buttonLevelBeginning btn": "btn"}
        onClick={this.props.onClick}
      >
        <div className="inner" />
        <div className="outer">
            <h4>{this.props.title}</h4>
        </div>

        <style jsx>{`

          .btn {
            width: 10.5rem;
            height: 4rem;
            will-change: transform;
            position: fixed;
            top: 80%;
          }
          .btn h4{
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
            width: 27rem;
            height: 6rem;
            top: 65%;
          }

          .large h4{
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 3.4rem;
            text-transform: uppercase;
          }

          .buttonLevelBeginning{
            top: 52%;
            width: 23.5rem;
          }

          @media (max-width: 600px) {
            .btn {
              top: 88%;
            }
            .large {
              top: 75%;
            }
            .buttonLevelBeginning{
              top: 52%;
              width: 23.5rem;
            }
          }

        `}</style>
      </a>
    )
  }
}

export default Button
