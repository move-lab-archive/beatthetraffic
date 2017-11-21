import React from 'react'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout'
import GamePage from '../components/game/GamePage'

import { loadCity } from '../statemanagement/app/GameStateManagement'

class Index extends React.Component {
  static getInitialProps ({ store, query, isServer }) {
    const city = query.city || store.getState().app.get('selectedCity')
    const level = query.level || 1
    console.log(`Setting city ${city}, level ${level}`)
    store.dispatch(loadCity(city, level))
  }

  render () {
    return (
      <Layout>
        <GamePage />
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)
