import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  hideCityPicker,
  showCityPicker
} from '../../statemanagement/app/AppStateManagement'

class ChangeCityButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    white: PropTypes.bool,
    cityPickerVisible: PropTypes.bool
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
          `}
      >
        <h4 className='change-city'>{this.props.label}</h4>
        <svg
          className='change-city-icon'
          width='11'
          height='5'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill={`${this.props.white ? '#FFFFFF' : '#262626'}`}
            d='M5.5 0L0 5h11z'
            fillRule='evenodd'
          />
        </svg>
        <style jsx>{`
          .change-city-container {
            position: fixed;
            z-index: 14;
            bottom: 1.5rem;
            left: 3rem;
            cursor: pointer;
            animation: fadeIn 2s;
          }

          .change-city-container.active .change-city,
          .change-city-container:hover .change-city {
            color: #ff3bff;
          }

          .change-city-container.active .change-city-icon {
            transform: rotate(180deg);
          }

          .change-city-container.white .change-city {
            color: white;
          }

          .change-city {
            cursor: pointer;
            z-index: 14;
            display: inline-block;
            padding-right: 0.5rem;
          }

          .change-city-icon {
            z-index: 14;
            transition-duration: 0.3s;
            transition-delay: 0.3;
            display: inline-block;
            padding-bottom: 1px;
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
})(ChangeCityButton)
