import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showMenu } from '../../../../statemanagement/app/AppStateManagement'

class MenuBtn extends Component {
  render () {
    return (
      <div
        className={`menu-button
        ${this.props.introAnimPlayed ? '' : 'hidden'}`}
        onClick={() => this.props.dispatch(showMenu())}
      >
        <style jsx>{`
          .menu-button {
            position: fixed;
            top: 1.6rem;
            right: 2.1rem;
            z-index: 6;
            width: 4.4rem;
            height: 4.4rem;
            cursor: pointer;
            border-radius: 0.2rem;
            background-repeat: no-repeat;
            background-size: 3rem 3rem;
            background-position: center;
            background-image: url(/static/assets/icons/icon-menu.svg);
            opacity: 1;
            transition: opacity 0.3s;
          }

          .hidden {
            opacity: 0;
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
