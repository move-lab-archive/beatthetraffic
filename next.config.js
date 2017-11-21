function getCity (cityName) {
  const cityRoutes = {}

  cityRoutes[`/${cityName}/level/1`] = {
    page: '/',
    query: {
      city: cityName,
      level: 1
    }
  }

  cityRoutes[`/${cityName}/level/2`] = {
    page: '/',
    query: {
      city: cityName,
      level: 2
    }
  }

  cityRoutes[`/${cityName}/level/3`] = {
    page: '/',
    query: {
      city: cityName,
      level: 3
    }
  }

  return cityRoutes
}

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      ...getCity('stuttgart1'),
      ...getCity('stuttgart2'),
      ...getCity('stuttgart3'),
      ...getCity('stuttgart4'),
      '/webgl': { page: '/webgl' }
    }
  }
}