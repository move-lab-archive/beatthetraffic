import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showMenu } from '../../../../statemanagement/app/AppStateManagement'

class MenuBtn extends Component {
  render () {
    return (
      <div
        className={`menu-button
          ${this.props.isLandingPage ? 'landing' : ''}
          ${this.props.isShowingIntro ? 'hidden' : ''}
        `}
        onClick={() => this.props.dispatch(showMenu())}
      >
        <svg width='30px' height='22px' viewBox='0 0 30 22' version='1.1'>
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='Layout'
              transform='translate(-3332.000000, -2077.000000)'
              stroke={`${this.props.introAnimPlayed ? '#FFFE4A' : '#262626'}`}
              strokeWidth='4'
            >
              <path d='M3332,2079 L3362,2079' id='Path-15-Copy-2' />
              <path d='M3332,2088 L3362,2088' id='Path-15-Copy-3' />
              <path d='M3332,2097 L3362,2097' id='Path-15-Copy-4' />
            </g>
          </g>
        </svg>

        <style jsx>{`
          .menu-button {
            position: fixed;
            top: 2.6rem;
            right: 1.4rem;
            z-index: 10;
            width: 4.4rem;
            height: 4.4rem;
            cursor: default;
            opacity: 1;
          }

          .menu-button.landing {
            animation: fadeInHeadline 3s;
          }

          .menu-button:not(.landing) {
            transition: opacity 0.3s;
          }

          .hidden {
            opacity: 0;
          }

          .menu-button svg {
            cursor: pointer;
            transition: 0.1s;
          }
          .menu-button svg:hover g {
            /*stroke: #ff3bff;*/
          }

          @keyframes fadeInHeadline {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    showMenu: state.app.get('showMenu'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  }
})(MenuBtn)
