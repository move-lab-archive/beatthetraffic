import React, { Component } from 'react'

class LeftCloud extends Component {
  render () {
    return (
      <div>
        {/* Optimized with https://jakearchibald.github.io/svgomg/ */}
        <img className='leftcloud' src='/static/assets/landing/leftcloud.svg' />
        <style jsx>{`
          .leftcloud {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 70%;
            will-change: transform;
            // Infortunately not fast enough while
            // loading and parsing the other JS
            // Disabling animation for now
            // TODO remove code
            // animation: leftcloudAnimation 1.5s
            //   cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          @keyframes leftcloudAnimation {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @media (min-width: 450px) {
            .leftcloud {
              width: 40%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default LeftCloud
