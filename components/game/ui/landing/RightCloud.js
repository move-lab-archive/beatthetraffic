import React, { Component } from 'react'

class RightCloud extends Component {
  render () {
    return (
      <div>
        {/* Optimized with https://jakearchibald.github.io/svgomg/ */}
        <img
          className={`rightcloud ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/rightcloud.svg'
        />
        {/* NOTE We can't animate in at first load, browser
            is busy doing loading & parsing of javascript and it is slow on svg
        */}

        <style jsx>{`
          .rightcloud {
            position: absolute;
            top: -1%;
            width: 85%;
            right: 0%;
            animation: rightcloudAnimateIn 2.5s;
          }

          .animate-out {
            animation: 2s rightcloudAnimationOut 0s
              cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          @keyframes rightcloudAnimationOut {
            0% {
              transform: translateX(0%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes rightcloudAnimateIn {
            0% {
              transform: translateX(100%);
            }
            70% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @media (min-width: 450px) {
            .rightcloud {
              width: 45%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default RightCloud
