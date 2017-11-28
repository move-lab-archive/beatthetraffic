import React, { Component } from 'react'

class RightCloud extends Component {
  render () {
    return (
      <div>
        {/* Optimized with https://jakearchibald.github.io/svgomg/ */}
        <img
          className='rightcloud'
          src='/static/assets/landing/rightcloud.svg'
        />
        <style jsx>{`
          .rightcloud {
            position: absolute;
            top: -1%;
            width: 90%;
            right: 0%;
            // Infortunately not fast enough while
            // loading and parsing the other JS
            // Disabling animation for now
            // TODO remove code
            // will-change: transform;
            // animation: rightcloudAnimation 1.5s
            //   cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          @keyframes rightcloudAnimation {
            0% {
              transform: translateX(100%);
            }
            50% {
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
