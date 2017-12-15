import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class BtnLanding extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    onClick: PropTypes.func
  }

  constructor(props) {
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

  componentDidMount() {
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

  handleClick() {
    if (this.props.loaded) {
      clearTimeout(this.timeoutRestartAnimation)
      this.props.onClick()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutRestartAnimation)
  }

  render() {
    return (
      <div
        className={`btn-landing ${this.props.loaded ? '' : 'loading'} ${
          this.state.keepLoading && !this.props.loaded ? 'keep-loading' : ''
        }`}
        onClick={this.handleClick}
      >
        <div className="inner" />
        <div className="outer">
          <h3>Defend {this.props.selectedCityLabel}!</h3>
        </div>
        <style jsx>{`
          .btn-landing {
            left: 50%;
            top: 50%;
            margin-top: 100px;
            position: absolute;
            width: 260px;
            height: 60px;
            transform: translateX(-50%) translateY(-50%);
            //GPU accelerate
            will-change: transform;
            animation: 1.3s fadeIn;
          }

          .loading .outer {
            animation: progressBarAnimation ${this.animationDuration}s linear;
          }

          .loading .outer h4 {
            opacity: 0;
          }

          .keep-loading .outer {
            animation-iteration-count: infinite;
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
            animation: alarm 0.8s infinite;
            animation-delay: 30s;
          }

          .btn-landing .outer h3 {
            transition: opacity 0.5s;
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

          @media (min-width: 600px) {
            .btn-landing {
              margin-top: 50px;
              width: 300px;
            }
          }

          @keyframes progressBarAnimation {
            0% {
              transform: scaleX(0);
            }
            25% {
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

          @keyframes alarm {
            0% {
              background-color: #4effff;
            }
            50% {
              background-color: #ff3bff;
            }
            100% {
              background-color: #4effff;
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
