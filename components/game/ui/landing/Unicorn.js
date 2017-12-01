import React, { Component } from 'react'

// Optimized with https://jakearchibald.github.io/svgomg/

class Unicorn extends Component {
  render () {
    return (
      <svg
        className='unicorn'
        width='111'
        height='111'
        viewBox='0 0 111 111'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='none' fillRule='evenodd'>
          <g>
            <g>
              <g transform='matrix(-1 0 0 1 111 0)'>
                <path
                  fill='#E3E5EA'
                  d='M3.79 86.587L9.05 101.5h16.985L59.52 86.586l8.363 24.01 32.66-12.005v-21.15l-13.778-30.22-15.03-11.998L59.52 3.822l-4.206-3.5-3.147 18.536L34.332.32l-2.07 3.502v22.47l-6.227 20.93'
                />
                <path
                  fill='#FF3BFF'
                  d='M68.218 38.448l13.69 19.664-3.137 9.338h8.97L97.797 83.3l-14.79 13.297h21.78l5.938 4.18V75.78l-9.318-37.332-22.636-19.46H68.22'
                />
                <ellipse className="eye"
                  fill='#000'
                  cx='49.554'
                  cy='52.142'
                  rx='5.946'
                  ry='5.961'
                />
                <path
                  fill='#E8E700'
                  d='M30.248 44.29L4.178 11.794 36.07 30.897M30.256 44.28c7.88-3.254 9.838-7.717 5.875-13.387'
                />
                <path
                  fill='#FF3BFF'
                  d='M34.023 32.833l8.704 12.54 3.188-12.54 4.502 6.27 2.94-11.37V19.38l-10.63 4.86M8.548 77.895l21.65 21.908-11.084 7.978L0 98.245v-11.38'
                />
                <ellipse
                  fill='#000'
                  cx='5.946'
                  cy='89.897'
                  rx='1.982'
                  ry='1.987'
                />
              </g>
            </g>
          </g>
        </g>
        <style jsx>{`
          .unicorn {
            position: absolute;
            z-index: 4;
            left: 20%;
            top: 45%;
            will-change: transform;
            animation: scaleInAnimation 2.7s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .eye{
            animation: wink 5s infinite;
            animation-delay: 1s;
          }

          @keyframes scaleInAnimation {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            70% {
              transform: scale(0);
              opacity: 0;
            }
            80% {
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes wink {
            0% {
              ry: 5.961;
            }
            48% {
              ry: 5.961;
            }
            50% {
              ry: 2.961;
            }
            51% {
              ry: 5.961;
            }
            100% {
              ry: 5.961;
            }
          }
        `}</style>
      </svg>
    )
  }
}

export default Unicorn
