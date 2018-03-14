import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  hideCityPicker,
  showCityPicker
} from '../../statemanagement/app/AppStateManagement'

class ChangeCityButtonLanding extends Component {
  static propTypes = {
    label: PropTypes.string,
    white: PropTypes.bool,
    cityPickerVisible: PropTypes.bool,
    noAnim: PropTypes.bool
  }

  constructor (props) {
    super(props)

    this.handleChangeCityClick = this.handleChangeCityClick.bind(this)
  }

  handleChangeCityClick () {
    if (this.props.cityPickerVisible) {
      this.props.dispatch(hideCityPicker())
    } else {
      this.props.dispatch(showCityPicker(this.props.label))
    }
  }

  render () {
    return (
      <div
        onClick={this.handleChangeCityClick}
        className={`change-city-container
            ${this.props.cityPickerVisible ? 'active' : ''}
            ${this.props.white ? 'white' : ''}
            ${this.props.noAnim ? '' : 'anim'}
          `}
      >
        <img
          className='unicorn'
          src='/static/assets/landing/asset-unicorn.png'
        />
        <div className='bubble-hint'>
          <div className='bubble-text'>OR PLAY</div>
          <div className='bubble-text bubble-city'>
            <span className='city'>BUENOS AIRES</span>
            <div className='arrow-down' />
          </div>
        </div>
        <style jsx>{`
          .change-city-container {
            position: fixed;
            z-index: 14;
            bottom: 1rem;
            left: 1.5rem;
            cursor: pointer;
          }

          .unicorn {
            width: 5.5rem;
          }

          .bubble-hint {
            position: absolute;
            bottom: 2rem;
            left: 5.5rem;
            cursor: pointer;

            margin: 0 auto;
            text-align: center;
            box-sizing: content-box;

            background: url('/static/assets/landing/bubble.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding-top: 1.5rem;
            padding-bottom: 2.5rem;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            font-size: 2rem;
            min-height: 6.5rem;
            min-width: 15.5rem; // To fit LOS ANGELES LONGEST TEXT

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .bubble-text {
            font-family: 'Geo', sans-serif;
            font-weight: 400;
          }

          .bubble-city {
            color: #ff3bff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .city {
            display: inline-block;
          }

          .arrow-down {
            display: inline-block;
            margin-left: 5px;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid black;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            70% {
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
    cityPickerVisible: state.app.get('showCityPicker')
  }
})(ChangeCityButtonLanding)
