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
      '/about': { page: '/about' },
      '/highscore': { page: '/highscore' },
      ...getCity('stuttgart1'),
      ...getCity('stuttgart2')
    }
  }
}
