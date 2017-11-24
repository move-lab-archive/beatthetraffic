import React, { Component } from 'react'
import { connect } from 'react-redux'

import { hideMenu } from '../../../../statemanagement/app/AppStateManagement'

class Menu extends Component {
  componentWillReceiveProps (newProps) {}

  render () {
    return (
      <div
        className={`menu-page ${this.props.showMenu ? 'visible' : 'hidden'}`}
      >
        <div className='title'>MENU</div>
        <img
          className='btn-close'
          src='/static/assets/icons/icon-close.svg'
          onClick={() => this.props.dispatch(hideMenu())}
        />
        <style jsx>{`
          .menu-page {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            color: white;
            background-color: #262626;
            will-change: transform;
            transition: 0.3s ease-in-out;
          }

          .hidden {
            transform: translateX(100%);
          }

          .visible {
            transform: translateX(0%);
          }

          .btn-close {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            width: 2.4rem;
            height: 2.4rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    showMenu: state.app.get('showMenu')
  }
})(Menu)
