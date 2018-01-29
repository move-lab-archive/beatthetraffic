const minBy = require('lodash.minby')
const distance = require('@turf/distance')

exports.getClosestCityToIPLngLat = (lnglat, cities) => {
  const ipPoint = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: lnglat
    }
  }

  const citiesWithDistance = Object.keys(cities).map(citySlug => {
    const city = cities[citySlug]

    const cityPoint = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: city.location
      }
    }

    return {
      slug: citySlug,
      name: city.label,
      distance: distance(cityPoint, ipPoint)
    }
  })

  return minBy(citiesWithDistance, 'distance')
}
