import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { loadCity } from '../../../../statemanagement/app/GameStateManagement'

// TODO IMPROVE IT TO BE ABLE TO REUSE EASIER IN GAMEOVER AND WIN PAGE

class LocationMenu extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    handleClose: PropTypes.func,
    availableCities: PropTypes.object
  }

  changeCity(cityId) {
    this.props.dispatch(loadCity(cityId))
    this.props.handleClose()
  }

  render() {
    return (
      <div>
        <div
          className={`LocationsContainer ${
            this.props.isVisible ? 'visible' : 'hidden'
          }`}
        >
          <div className={`Locations`}>
            {Object.keys(this.props.availableCities)
              .filter(cityId => cityId !== this.props.selectedCity)
              .map(cityId => (
                <h2 onClick={() => this.changeCity(cityId)} key={cityId}>
                  {this.props.availableCities[cityId].label}
                </h2>
              ))}
          </div>
          <img
            onClick={() => this.props.handleClose()}
            className={`closeLocationMenu`}
            src="/static/assets/icons/icon-close-LocationMenu.svg"
          />
        </div>
        <style jsx>{`
          .LocationsContainer {
            background-color: white;
            max-width: 300px;
            width: 90%;
            left: 2.5rem;
            bottom: 7rem;
            height: 17rem;
            z-index: 10;
            position: fixed;
            border: 4px solid #262626;
          }

          .Locations {
            padding: 1.9rem;
          }

          .Locations h2 {
            text-transform: uppercase;
            margin: 0;
            cursor: pointer;
          }

          .closeLocationMenu {
            position: absolute;
            top: 1.9rem;
            right: 1.5rem;
            cursor: pointer;
          }

          .hidden {
            transform: translateY(100%);
            bottom: 0rem;
          }

          .visible {
            transform: translateX(0%);
            bottom: 7rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    availableCities: state.app.get('availableCities').toJS(),
    selectedCity: state.app.get('selectedCity')
  }
})(LocationMenu)