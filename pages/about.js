import React from 'react'
import Router from 'next/router'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout'
import AboutPage from '../components/about/AboutPage'

import { loadCity } from '../statemanagement/app/GameStateManagement'

class About extends React.Component {
  static getInitialProps({ store, query, isServer }) {
    const city = query.city || store.getState().app.get('selectedCity')
    const level = query.level || 1
    // console.log(`Setting city ${city}, level ${level}`)
    store.dispatch(loadCity(city, level))
  }

  componentDidMount() {
    Router.prefetch('/')
  }

  navigateToGame() {
    Router.push('/')
  }

  render() {
    return (
      <Layout>
        <AboutPage onClose={() => this.navigateToGame()} />
      </Layout>
    )
  }
}

export default withRedux(initStore)(About)
