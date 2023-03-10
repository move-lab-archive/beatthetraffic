import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class BtnLanding extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    onClick: PropTypes.func
  }

  constructor (props) {
    super(props)

    /* Put a long animation duration because
      We don't know how long it will take
      When the game is loaded, it will stop the animation
      And show the button in loaded state
    */
    this.animationDelay = 2
    this.animationDuration = 8

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      keepLoading: false
    }
  }

  componentDidMount () {
    const timeSinceAnimationStarted = new Date().getTime() - window.firstPaint
    // If game isn't ready restart progress bar in time
    this.timeoutRestartAnimation = setTimeout(() => {
      if (!this.props.loaded) {
        this.setState({
          keepLoading: true
        })
      }
    }, this.animationDuration * 1000 - timeSinceAnimationStarted)
  }

  handleClick () {
    if (this.props.loaded) {
      clearTimeout(this.timeoutRestartAnimation)
      this.props.onClick()
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeoutRestartAnimation)
  }

  render () {
    return (
      <div
        className={`btn-landing ${this.props.loaded ? '' : 'loading'} ${
          this.state.keepLoading && !this.props.loaded ? 'keep-loading' : ''
        }`}
        onClick={this.handleClick}
      >
        <div className='inner' />
        <div className='outer'>
          <h3>let's play</h3>
        </div>
        <style>{`
        .btn-landing {
          position: relative;
          width: 180px;
          height: 60px;
          //GPU accelerate
          will-change: transform;
          animation: 1.3s fadeIn;
          z-index: 4;
          color: #262626;
        }
        
        .btn-landing .inner {
          width: 100%;
          height: 100%;
          left: 5px;
          top: 5px;
          background-color: #262626;
          position: absolute;
        }
        .btn-landing .outer {
          width: 100%;
          height: 100%;
          background-color: #4effff;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: 0 0;
        }

        .btn-landing .outer h3 {
          transition: opacity 0.5s;
          margin-top: 2.8rem;
        }

        .btn-landing .outer:hover {
          background-color: #ff3bff;
          cursor: pointer;
        }

        .btn-landing .outer:active {
          background-color: #ff3bff;
          left: 2px;
          top: 2px;
        }
        
          .loading .outer {
            animation: progressBarAnimation 8s linear;
          }

          .loading .outer h3 {
            opacity: 0;
          }

          .keep-loading .outer {
            animation-iteration-count: infinite;
          }

          @media (min-width: 600px) {
            .btn-landing {
              width: 200px;
            }
          }

          @keyframes progressBarAnimation {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }

          @keyframes fadeIn {
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
    selectedCityLabel: state.app
      .get('availableCities')
      .get(state.app.get('selectedCity'))
      .get('label')
  }
})(BtnLanding)
