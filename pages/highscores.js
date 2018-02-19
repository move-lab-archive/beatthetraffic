import React from 'react'
import Router from 'next/router'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout'
import ScorePage from '../components/score/ScorePage'

import {
  loadCity,
  fetchHighscores
} from '../statemanagement/app/GameStateManagement'

class HighScore extends React.Component {
  static async getInitialProps ({ store, query, isServer }) {
    const city = query.city || store.getState().app.get('selectedCity')
    const level = query.level || 1
    // console.log(`Setting city ${city}, level ${level}`)
    store.dispatch(loadCity(city, level))
    try {
      await store.dispatch(fetchHighscores())
    } catch (error) {
      console.log('Unable to SSR highscores')
    }
  }

  componentDidMount () {
    Router.prefetch('/')
  }

  navigateToGame () {
    Router.push('/')
  }

  render () {
    return (
      <Layout>
        <ScorePage onClose={() => this.navigateToGame()} />
      </Layout>
    )
  }
}

export default withRedux(initStore)(HighScore)
