import React, { Component } from 'react'

class LocationMenu extends Component {
  render () {
    return (
      <div>
        <div className={`LocationsContainer hidden`}>
          <div className={`Locations`}>
            <h2>Stuttgart</h2>
            <h2>Berlin</h2>
            <h2>Portland</h2>
            <h2>Los Angeles</h2>
          </div>
          <img
            className={`closeLocationMenu`} src='/static/assets/icons/icon-close-LocationMenu.svg'
          />
        </div>
        <style jsx>{`
          .LocationsContainer{
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

          .Locations{
            padding: 1.9rem;
          }

          .Locations h2{
            text-transform: uppercase;
            margin: 0;
          }

          .closeLocationMenu{
            position: absolute;
            top: 1.9rem;
            right: 1.5rem;
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

export default LocationMenu
