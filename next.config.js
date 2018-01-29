const cities = Object.keys(require('./gameconfig.json').availableCities)

function getCityRoutes (cityName) {
  const cityRoutes = new Map()

  const nbLevels = 3

  for (let currentLevel = 1; currentLevel <= nbLevels; currentLevel++) {
    cityRoutes.set(`/${cityName}/level/${currentLevel}`, {
      page: '/',
      query: {
        city: cityName,
        level: currentLevel
      }
    })
  }

  return cityRoutes
}

module.exports = {
  exportPathMap: function () {
    let routes = new Map()

    routes.set('/', { page: '/' })
    routes.set('/about', { page: '/about' })
    routes.set('/highscore', { page: '/highscore' })

    let allCitiesRoutes = cities.map(city => getCityRoutes(city))

    allCitiesRoutes.forEach(cityRoutes => {
      cityRoutes.forEach((value, key) => {
        routes.set(key, value)
      })
    })
    // Convert to object literal map
    // https://gist.github.com/lukehorvat/133e2293ba6ae96a35ba
    let routesObjLiteral = Array.from(routes).reduce(
      (obj, [key, value]) => Object.assign(obj, { [key]: value }),
      {}
    )

    return routesObjLiteral
  }
}
