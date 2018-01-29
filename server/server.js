const geoip = require('geoip-lite')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const Geo = require('./geo')
const availableCities = require('../gameconfig.json').availableCities
const defaultCity = require('../gameconfig.json').defaultSelectedCity

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
// TODO WE COULD CONFIGURE THE BUILD PROCESS TO PRE-COMPRESS
// OUT/ directory to avoid doing it on the fly and use CPU
app.use(compression())

app.get('/', (req, res) => {
  // Default city
  let cityToRedirectTo = defaultCity

  const clientIP =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress
  // Try to get closest city from api
  console.log('Client ip is: ' + clientIP)

  const geo = geoip.lookup(clientIP)

  if (geo) {
    cityToRedirectTo = Geo.getClosestCityToIPLngLat(geo.ll, availableCities)
      .slug
    console.log('Closest city is ' + cityToRedirectTo)
  } else {
    // Can't get IP, default to default city
    console.log('Cant guess IP, fallback to default city')
  }

  res.redirect(`/${cityToRedirectTo}/level/1`)
})

app.get('/:city', (req, res, next) => {
  if (Object.keys(availableCities).indexOf(req.params.city) > -1) {
    res.redirect(`/${req.params.city}/level/1`)
  } else {
    next()
  }
})

app.use(express.static('out'))

app.listen(4000, () => console.log('Example app listening on port 4000!'))
