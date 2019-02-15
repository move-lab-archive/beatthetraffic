import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  hideCityPicker,
  showCityPicker
} from '../../statemanagement/app/AppStateManagement'
import { prefixURL } from '../../utils/url';

class ChangeCityButtonLanding extends Component {
  static propTypes = {
    label: PropTypes.string,
    white: PropTypes.bool,
    cityPickerVisible: PropTypes.bool,
    noAnim: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.handleChangeCityClick = this.handleChangeCityClick.bind(this)

    this.state = {
      suggestedCity: '',
      bubbleImageLoaded: false
    }
  }

  handleChangeCityClick() {
    if (this.props.cityPickerVisible) {
      this.props.dispatch(hideCityPicker())
    } else {
      this.props.dispatch(showCityPicker(this.props.label))
    }
  }

  setRandomCity() {
    const city = this.props.availableCities
      .sortBy(Math.random)
      .filter((cityLabel, cityKey) => {
        if (cityKey === this.props.selectedCity) {
          return false
        } else if (cityKey === this.state.suggestedCity) {
          return false
        } else {
          return true
        }
      })
      .first()
      .get('label')
    this.setState({
      suggestedCity: city
    })
  }

  componentDidMount() {
    this.setRandomCity()

    this.intervalChangeSuggestedCity = setInterval(
      () => this.setRandomCity(),
      4000
    )

    const bubbleImage = new Image()
    bubbleImage.onload = () => {
      this.setState({
        bubbleImageLoaded: true
      })
    }
    bubbleImage.src = prefixURL('/static/assets/landing/bubble.svg')
  }

  componentWillUnmount() {
    if (this.intervalChangeSuggestedCity) {
      clearInterval(this.intervalChangeSuggestedCity)
    }
  }

  render() {
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
          src={prefixURL('/static/assets/landing/asset-unicorn.png')}
        />
        {this.state.bubbleImageLoaded && (
          <div className='bubble-hint'>
            <div className='bubble-text'>OR PLAY</div>
            <div className='bubble-text bubble-city'>
              <span className='city'>
                {this.state.suggestedCity.toUpperCase()}
              </span>
              <div className='arrow-down' />
            </div>
          </div>
        )}
        <style jsx>{`
          .change-city-container {
            position: fixed;
            z-index: 14;
            bottom: 1rem;
            left: 1.5rem;
            cursor: pointer;
            animation: fadeIn 2s;
          }

          .unicorn {
            width: 5rem;
            bottom: 3rem;
            left: 2.6rem;
            position: fixed;
          }

          .bubble-hint {
            position: absolute;
            bottom: 2rem;
            left: 5rem;
            cursor: pointer;

            margin: 0 auto;
            text-align: center;
            box-sizing: content-box;

            background: url(${prefixURL("/static/assets/landing/bubble.svg")});
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding-top: 1.5rem;
            padding-bottom: 2.5rem;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            font-size: 2rem;
            min-height: 5.5rem;
            min-width: 15.5rem; // To fit LOS ANGELES LONGEST TEXT

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .bubble-text {
            font-family: 'Quantico', sans-serif;
            margin-left: 0.7rem;
            margin-top: 0rem;
            font-weight: 700;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
          }

          .bubble-city {
            margin-top: 0rem;
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

          @media (max-width: 700px) {
            .unicorn {
              bottom: 2.5rem;
            }

            .bubble-hint {
              bottom: 1.6rem;
            }
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
    cityPickerVisible: state.app.get('showCityPicker'),
    availableCities: state.app.get('availableCities'),
    selectedCity: state.app.get('selectedCity')
  }
})(ChangeCityButtonLanding)
