import React, { Component } from 'react'

class RightCloud extends Component {
  render () {
    return (
      <div className="rightcloud">
        {/* Optimized with https://jakearchibald.github.io/svgomg/ */}
        <img
          className={`rightcloud-1 ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/rightcloud-1.svg'
        />
        <img
          className={`rightcloud-2 ${this.props.animateOut ? 'animate-out' : ''}`}
          src='/static/assets/landing/rightcloud-2.svg'
        />
        {/* NOTE We can't animate in at first load, browser
            is busy doing loading & parsing of javascript and it is slow on svg
        */}

        <style jsx>{`
          .rightcloud-1 {
            position: absolute;
            top: 0%;
            width: 30%;
            right: 0%;
            animation: fadeIn 20s linear infinite;
            opacity: 0;
            transform: scale(1);
          }
          .rightcloud-2 {
            position: absolute;
            bottom: 10%;
            width: 50%;
            right: 0%;
            animation: fadeIn 20s linear infinite;
            opacity: 0;
            transform: scale(1);
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(1);
            }
            5% {
              opacity: 0;
              transform: scale(1);
            }
            10% {
              opacity: 0.7;
            }
            30% {
              opacity: 0.7;
            }
            100% {
              transform: scale(3);
              opacity: 0;
            }
          }

          @media (min-width: 450px) {
            .rightcloud-1 {
              width: 15%;
            }
            .rightcloud-2 {
              width: 35%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default RightCloud
