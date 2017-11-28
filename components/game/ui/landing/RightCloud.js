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
        <style jsx>{`
          .rightcloud {
            position: absolute;
            top: -1%;
            width: 90%;
            right: 0%;
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
