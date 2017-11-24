import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

import ButtonClose from '../../../shared/ButtonClose'
import SocialShareButtons from '../../../shared/SocialShareButtons'

import AboutPage from '../../../about/AboutPage'
import ScorePage from '../../../score/ScorePage'

import { hideMenu } from '../../../../statemanagement/app/AppStateManagement'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.urlWhenEnteringMenuToRestore = '/'

    this.state = {
      showAbout: false,
      showScore: false
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.showMenu !== this.props.showMenu) {
      if (newProps.showMenu) {
        // Push
        this.urlWhenEnteringMenuToRestore = Router.asPath

        // Doing the ?show=menu trick because of a bug of next.js
        // https://github.com/zeit/next.js/issues/2668
        Router.push(
          '/?show=menu',
          `${this.urlWhenEnteringMenuToRestore}?show=menu`,
          {
            shallow: true
          }
        )
      } else {
        // Restore url
        Router.replace('/', `${this.urlWhenEnteringMenuToRestore}`, {
          shallow: true
        })
      }
    }

    if (
      this.props.url.query.show === 'menu' &&
      newProps.url.query.page === 'about'
    ) {
      console.log('show about page from menu')
      this.setState({
        showAbout: true
      })
    }

    if (
      this.props.url.query.show === 'menu' &&
      newProps.url.query.page === 'score'
    ) {
      console.log('show score page from menu')
      this.setState({
        showScore: true
      })
    }

    if (
      (this.props.url.query.page === 'about' ||
        this.props.url.query.page === 'score') &&
      newProps.url.query.page === undefined
    ) {
      console.log('hide about or score page from menu')
      this.setState({
        showAbout: false,
        showScore: false
      })
    }

    if (
      this.props.url.query.show === 'menu' &&
      newProps.url.query.show === undefined
    ) {
      // We exited the menu via backbutton
      console.log('Exit menu via backbutton')
      this.props.dispatch(hideMenu())
    }
  }

  showAbout () {
    Router.push('/?show=menu&page=about', `/about`, {
      shallow: true
    })
  }

  showScore () {
    Router.push('/?show=menu&page=score', `/highscore`, {
      shallow: true
    })
  }

  hideAbout () {
    window.history.back()
  }

  hideScore () {
    window.history.back()
  }

  render () {
    return (
      <div
        className={`menu-page ${this.props.showMenu ? 'visible' : 'hidden'}`}
      >
        <ButtonClose onClick={() => this.props.dispatch(hideMenu())} />
        <div className='link' onClick={() => this.showAbout()}>
          ABOUT
        </div>
        <div className='link' onClick={() => this.showScore()}>
          SCORE
        </div>
        <div className='link'>SHARE</div>
        <SocialShareButtons />
        {this.state.showAbout && <AboutPage onClose={() => this.hideAbout()} />}
        {this.state.showScore && <ScorePage onClose={() => this.hideScore()} />}
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
            padding: 2.4rem;
            padding-top: 4.4rem;
          }

          .hidden {
            transform: translateX(100%);
          }

          .visible {
            transform: translateX(0%);
          }

          .link {
            font-size: 5rem;
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
