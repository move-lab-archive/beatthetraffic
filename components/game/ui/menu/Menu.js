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
      // console.log('show about page from menu')
      this.setState({
        showAbout: true
      })
    }

    if (
      this.props.url.query.show === 'menu' &&
      newProps.url.query.page === 'score'
    ) {
      // console.log('show score page from menu')
      this.setState({
        showScore: true
      })
    }

    if (
      (this.props.url.query.page === 'about' ||
        this.props.url.query.page === 'score') &&
      newProps.url.query.page === undefined
    ) {
      // console.log('hide about or score page from menu')
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
      // console.log('Exit menu via backbutton')
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

        <div className='menu-container'>
          <div className='menu'>
            <div className='menu-items'>
              <div className='link' onClick={() => this.showAbout()}>
                <h1>ABOUT</h1>
              </div>
              <div className='link' onClick={() => this.showScore()}>
                <h1>HIGH SCORES</h1>
              </div>
              <div className='link'>
                <h1>SHARE</h1>
              </div>
              <SocialShareButtons />
            </div>

            <div className='city-selector-items'>
              <h4>Beat the traffic in</h4>
              <h2 className='link'>Tokio</h2>
              <h2 className='link'>Berlin</h2>
              <h2 className='link'>New York</h2>
              <h2 className='link'>Los Angeles</h2>
              <h2 className='link'>Stuttgart</h2>
              <h2 className='link'>Portland</h2>
              <h2 className='link'>New Delhi</h2>
              <h2 className='link'>Moscow</h2>
              <h2 className='link'>Barcelona</h2>
              <h2 className='link'>Addis Ababa</h2>
              <h2 className='link'>Buenos Aires</h2>
              <h2 className='link'>London</h2>
            </div>
          </div>
        </div>

        {this.state.showAbout && <AboutPage onClose={() => this.hideAbout()} />}
        {this.state.showScore && <ScorePage onClose={() => this.hideScore()} />}

        <img
          className={`menu-rightcloud ${
            this.props.showMenu ? 'visiblecloud' : 'hiddencloud'
          }`}
          src='/static/assets/menu/menu-rightcloud.svg'
        />

        <img
          className={`menu-leftcloud ${
            this.props.showMenu ? 'visiblecloud' : 'hiddencloud'
          }`}
          src='/static/assets/menu/menu-leftcloud.svg'
        />

        <style jsx>{`
          .menu-page {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            color: #262626;
            background-color: #ececec;
            will-change: transform;
            transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          }

          h1 {
            line-height: 2.8rem;
          }

          .menu-container {
            width: 100%;
            height: 100%;
            position: fixed;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
          }

          .menu{
            max-width: 700px;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .menu-items {
            margin-top: 5rem;
          }

          .city-selector-items {
            margin-top: 5rem;
            margin-bottom: 5rem;
          }

          .hidden {
            transform: translateX(100%);
          }

          .visible {
            transform: translateX(0%);
          }

          .link {
            cursor: pointer;
            position: relative;
            left: 2.9rem;
          }

          .link:hover {
            color: #ff3bff;
          }

          h2.link {
            line-height: 1.6rem;
          }

          .city-selector-items h4 {
            left: 2.9rem;
            position: relative;
            line-height: 0.2rem;
          }

          .menu-rightcloud {
            position: fixed;
            top: 0%;
            width: 60%;
            right: 0%;
            z-index: -1;
            transition: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .hiddencloud {
            transform: translateX(50%);
          }

          .visiblecloud {
            transform: translateX(0%);
          }

          .menu-leftcloud {
            position: fixed;
            bottom: 0%;
            width: 110%;
            left: 2%;
            z-index: -1;
            transition: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          }

          @media (min-width: 500px) {
            .menu-rightcloud {
              width: 40%;
            }
            .menu-leftcloud {
              width: 45%;
            }
          }

          @media (max-height: 350px) {
            .menu-items {
              margin-top: 0rem;
            }

            .city-selector-items {
              margin-top: 0rem;
              margin-bottom: 5rem;
            }
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
