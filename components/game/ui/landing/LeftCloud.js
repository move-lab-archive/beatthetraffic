import React, { Component } from 'react'

class LeftCloud extends Component {
  render () {
    return (
      <div className="leftcloud">
        {/* Optimized with https://jakearchibald.github.io/svgomg/ */}
        <img
          className={`leftcloud-1 ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/leftcloud-1.svg'
        />
        <img
          className={`leftcloud-2 ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/leftcloud-2.svg'
        />
        <img
          className={`leftcloud-3 ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/leftcloud-3.svg'
        />
        <style jsx>{`
          .leftcloud-1 {
            position: absolute;
            top: 5%;
            left: 0px;
            width: 20%;
            will-change: transform;
            animation: fadeIn 6s linear infinite;
            opacity: 0;
            transform: scale(1);
          }
          .leftcloud-2 {
            position: absolute;
            top: 35%;
            left: 10%;
            width: 55%;
            will-change: transform;
            animation: fadeIn 10s linear infinite;
            opacity: 0;
            transform: scale(1);
          }
          .leftcloud-3 {
            position: absolute;
            bottom: 0%;
            left: 0px;
            width: 35%;
            will-change: transform;
            animation: fadeIn 5s linear infinite;
            opacity: 0;
            transform: scale(1);
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(1) translateX(0%);
            }
            5% {
              opacity: 0;
              transform: scale(1) translateX(0%);
            }
            30% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.7;
            }
            100% {
              transform: scale(3) translateX(50%);
              opacity: 0;
            }
          }

          @media (min-width: 450px) {
            .leftcloud-1 {
              width: 12%;
            }
            .leftcloud-2 {
              left: 15%;
              top: 20%;
              width: 45%;
            }
            .leftcloud-3 {
              width: 22%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default LeftCloud
