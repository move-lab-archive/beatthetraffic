import React from 'react'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout'
// import WebGLPage from '../components/webgl/WebGLPage'

// import { loadLevel } from '../statemanagement/app/GameStateManagement';

class WebGL extends React.Component {
  static getInitialProps ({ store, query, isServer }) {
    // const level = query.level || 1;
    // console.log(`Setting level ${level}`);
    // store.dispatch(loadLevel(parseInt(level)));
  }

  render () {
    return (
      <Layout>
        <div>Coucou</div>
      </Layout>
    )
  }
}

export default withRedux(initStore)(WebGL)
