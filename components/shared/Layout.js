import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
// import ReactGA from 'react-ga'
// import Router from 'next/router'

class Layout extends Component {
  recordFirstPaint () {
    return {
      __html: '<script>window.firstPaint = new Date().getTime()</script>'
    }
  }

  componentDidMount () {
    // ReactGA.initialize("ga-id");
    // ReactGA.set({ page: Router.pathname });
    // ReactGA.pageview(Router.pathname);
  }

  render () {
    return (
      <div>
        <Head>
          <title>Beat the traffic {this.props.selectedCity} - moovel lab</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1,user-scalable=0,initial-scale=1'
          />
          <meta name='description' content='Beat the Traffic X – moovel lab' />
          <link
            rel='apple-touch-icon'
            href='/static/assets/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            href='/static/assets/favicon/favicon.png'
          />
          <meta property='og:title' content='Beat the traffic - moovel lab' />
          <meta
            property='og:url'
            content='https://beatthetraffic.moovellab.com'
          />
          <meta
            property='og:image'
            content='https://beatthetraffic.moovellab.com/static/images/cover.png'
          />
          <meta property='og:description' content='' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='moovel lab' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@moovelLab' />
          <meta name='twitter:title' content='Beat the traffic - moovel lab' />
          <meta name='twitter:description' content='' />
          <meta
            name='twitter:image'
            content='https://whatthestreet.moovellab.com/static/images/cover.png'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Geo|Quantico:400,700'
            rel='stylesheet'
          />
        </Head>
        {this.props.children}
        <div dangerouslySetInnerHTML={this.recordFirstPaint()} />

        <div className='msg' />

        <style jsx>{`
          :global(html, body) {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            left: 0;
            top: 0;
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            background-color: white;
            // Max size of the cursor is 128px x 128px
            cursor: url(/static/assets/cursor/magic-wand.png) 10 10, auto;
            cursor: -webkit-image-set(
                  url(/static/assets/cursor/magic-wand.png) 1x,
                  url(/static/assets/cursor/magic-wand2x.png) 2x
                )
                10 10,
              pointer;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            color: #262626;
            position: relative;
          }

          :global(html.overflow-hidden, html.overflow-hidden
              body, body.overflow-hidden) {
            overflow: hidden;
            position: relative;
          }

          :global(html) {
            box-sizing: border-box;
            -webkit-user-select: none;
          }

          :global(*, *:before, *:after) {
            box-sizing: inherit;
          }

          :global(h1) {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 5rem;
            line-height: 6rem;
            text-transform: uppercase;
          }
          :global(h2) {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 4rem;
            line-height: 4.9rem;
            text-transform: uppercase;
          }
          :global(h3) {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 3.4rem;
            text-transform: uppercase;
          }
          :global(h4) {
            font-family: 'Geo', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
          }
          :global(p) {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.9rem;
          }
          :global(a) {
            text-decoration: none;
            color: #262626;
          }

          :global(html) {
            font-size: 60%;
          }

          @media (max-width: 600px) {
            :global(html) {
              font-size: 50%;
            }
          }

          @media (max-height: 400px) {
            :global(html) {
              font-size: 50%;
            }
          }

          :global(body) {
          }

          :global(body > div:first-of-type) {
            height: 100%;
          }

          :global(#__next) {
            height: 100%;
          }

          :global(#__next > div) {
            height: 100%;
          }

          :global(#__next > div > div) {
            height: 100%;
          }

          :global(.main-page) {
            height: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    selectedCity: state.app
      .get('availableCities')
      .get(state.app.get('selectedCity'))
      .get('label')
  }
})(Layout)
