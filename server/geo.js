const minBy = require('lodash.minby')
const distance = require('@turf/distance')

exports.getClosestCityToIPLngLat = (latlng, cities) => {
  const ipPoint = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [latlng[1], latlng[0]]
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
