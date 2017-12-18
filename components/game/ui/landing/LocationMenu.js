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
                <h3 onClick={() => this.changeCity(cityId)} key={cityId}>
                  {this.props.availableCities[cityId].label}
                </h3>
              ))}
          </div>

          <div  onClick={() => this.props.handleClose()}
                className={`closeLocationMenu`}
          >
            <div className="inner" />
            <div className="outer">
              <img
                src="/static/assets/icons/icon-close.svg"
              />
            </div>
          </div>

        </div>
        <div
          className={`coverLandingPage ${
            this.props.isVisible ? 'visibleCoverLandingPage' : 'hiddenCoverLandingPage'
          }`}
        >
        </div>
        <style jsx>{`
          .LocationsContainer {
            background-color: white;
            max-width: 300px;
            width: 90%;
            left: 3.1rem;
            bottom: 7rem;
            height: 17rem;
            z-index: 10;
            position: fixed;
            border: 4px solid #262626;
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
            transition-delay: 150ms;
            z-index: 15;
          }

          .coverLandingPage{
            position: fixed;
            background: #FFFE4A;
            width: 100%;
            height: 100%;
            top: 0%;
            left: 0;
            z-index: 10;
            opacity: 0.93;
            transition: all 150ms;
          }

          .Locations {
            padding: 1.9rem;
          }

          .Locations h3 {
            text-transform: uppercase;
            margin: 0;
            cursor: pointer;
          }
          .Locations h3:hover{
            color: #FF3BFF;
          }

          .closeLocationMenu {
            position: absolute;
            top: 1.9rem;
            right: 1.9rem;
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
          .closeLocationMenu .inner {
            width: 100%;
            height: 100%;
            left: 4px;
            top: 4px;
            background-color: #262626;
            position: absolute;
          }
          .closeLocationMenu .outer {
            width: 100%;
            height: 100%;
            background-color: #4effff;
            position: absolute;
          }
          .closeLocationMenu .outer img{
            top: 7px;
            left: 6.5px;
            position: absolute;
          }
          .closeLocationMenu .outer:hover {
            background-color: #ff3bff;
            cursor: pointer;
          }

          .closeLocationMenu .outer:active {
            background-color: #ff3bff;
            left: 1px;
            top: 1px;
          }


          .hidden {
            transform: translateY(100%);
            bottom: 0rem;
          }

          .visible {
            transform: translateX(0%);
            bottom: 7rem;
          }

          .hiddenCoverLandingPage {
            opacity: 0;
            z-index: 0;
          }

          .visibleCoverLandingPage {
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
    availableCities: state.app.get('availableCities').toJS(),
    selectedCity: state.app.get('selectedCity')
  }
})(LocationMenu)
