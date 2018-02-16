import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadCity } from '../../statemanagement/app/GameStateManagement'
import { hideCityPicker } from '../../statemanagement/app/AppStateManagement'
import ButtonClose from './ButtonClose'
import ChangeCityButton from './ChangeCityButton'

class CityPicker extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    label: PropTypes.string,
    availableCities: PropTypes.object
  }

  componentWillReceiveProps (newProps) {
    if (
      this.props.isVisible !== newProps.isVisible &&
      newProps.isVisible &&
      this.containerRef
    ) {
      this.containerRef.scrollTop = 0
    }
  }

  handleClose () {
    this.props.dispatch(hideCityPicker())
  }

  // changeCity (cityId) {
  //   this.props.dispatch(loadCity(cityId))
  //   this.handleClose()
  // }

  render () {
    let availableCities = this.props.availableCities
      .sort((a, b) => a.get('label').localeCompare(b.get('label')))
      .toJS()

    return (
      <div>
        <div
          ref={el => {
            this.containerRef = el
          }}
          className={`city-picker-container ${
            this.props.isVisible ? 'visible' : 'hidden'
          }`}
        >
          <div className={`cities`}>
            {Object.keys(availableCities).map(cityId => (
              <h3
                onClick={() => {
                  // TODO IMPROVE WITHOUT HARD RELOAD
                  window.location.href = `/${cityId}/level/1`
                }}
                key={cityId}
                className={cityId === this.props.selectedCity ? 'selected' : ''}
              >
                {availableCities[cityId].label}
              </h3>
            ))}
          </div>
          <ButtonClose onClick={() => this.handleClose()} smallPadding />
        </div>
        <div
          onClick={() => this.handleClose()}
          className={`city-picker-overlay ${
            this.props.isVisible ? 'visible' : 'hidden'
          }`}
        >
          <ChangeCityButton label={this.props.label} />
        </div>
        <style jsx>{`
          .city-picker-container {
            background-color: white;
            max-width: 280px;
            width: 90%;
            min-height: 17rem;
            max-height: 80%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            left: 3.1rem;
            bottom: 7rem;
            z-index: 10;
            position: fixed;
            border: 4px solid #262626;
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
            transition-delay: 150ms;
            z-index: 15;
            cursor: default;
          }

          .city-picker-overlay {
            position: fixed;
            background: #4effff;
            width: 100%;
            height: 100%;
            top: 0%;
            left: 0;
            z-index: 10;
            opacity: 0.93;
            transition: all 200ms; /*transition not working @tdurant any idea why? But its nothing important for now;) micro detail*/
            cursor: default;
          }

          .cities {
            padding: 1.9rem;
          }

          .cities h3 {
            text-transform: uppercase;
            margin: 0;
            cursor: pointer;
          }

          .cities h3.selected {
            color: #ff3bff;
          }

          .cities h3:hover {
            color: #ff3bff;
          }

          .city-picker-container.hidden {
            transform: translateY(100%);
            bottom: 0rem;
          }

          .city-picker-container.visible {
            transform: translateX(0%);
            bottom: 7rem;
          }

          .city-picker-overlay.hidden {
            opacity: 0;
            z-index: 0;
          }

          .city-picker-overlay.visible {
            opacity: 0.93;
            z-index: 10;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    availableCities: state.app.get('availableCities'),
    selectedCity: state.app.get('selectedCity'),
    isVisible: state.app.get('showCityPicker'),
    label: state.app.get('cityPickerLabel')
  }
})(CityPicker)
