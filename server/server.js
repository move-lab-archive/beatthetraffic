const RateLimit = require('express-rate-limit')
const basicAuth = require('express-basic-auth')
const geoip = require('geoip-lite')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const Geo = require('./geo')
const availableCities = require('../gameconfig.json').availableCities
const defaultCity = require('../gameconfig.json').defaultSelectedCity
const DBManager = require('./db/DBManager')
const nextApp = require('next')
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

const app = express()
const nextInstance = nextApp()
const handle = nextInstance.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 3000

// Init connection to db
DBManager.init().then(
  () => {
    console.log('Success init db')
  },
  err => {
    console.error(err)
    process.exit()
  }
)

// app.use(redirectToHTTPS([/localhost:(\d{4})/]))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(compression())

// Credentials allowed
// let usersCredentials = {}
// usersCredentials['moovellab'] = 'beatthetraffic'

// app.use(
//   basicAuth({
//     users: usersCredentials,
//     challenge: true,
//     realm: 'beatthetraffic'
//   })
// )

app.get(`${URL_PREFIX}/`, (req, res) => {
  // Default city
  let cityToRedirectTo = defaultCity

  let clientIP = req.connection.remoteAddress
  if (req.headers['x-forwarded-for']) {
    clientIP = req.headers['x-forwarded-for']
  }

  // Try to get closest city from api
  // console.log('Client ip is: ' + clientIP)

  const geo = geoip.lookup(clientIP)

  // console.log(geo)

  if (geo) {
    cityToRedirectTo = Geo.getClosestCityToIPLngLat(geo.ll, availableCities)
      .slug
    // console.log('Closest city is ' + cityToRedirectTo)
  } else {
    // Can't get IP, default to default city
    // console.log('Cant guess IP, fallback to default city')
  }

  res.redirect(`${URL_PREFIX}/${cityToRedirectTo}/level/1/`)
})

app.get(`${URL_PREFIX}/:city`, (req, res, next) => {
  if (Object.keys(availableCities).indexOf(req.params.city) > -1) {
    res.redirect(`${URL_PREFIX}/${req.params.city}/level/1/`)
  } else if (req.params.city === 'about') {
    // About page is rendered static
    // next() tells express to wait for the next route match which will be
    // app.use(express.static('out'))
    next()
  } else {
    // Overwise, handle the request normaly, SSR for highscore or get assets /static
    handle(req, res)
  }
})

app.get(`${URL_PREFIX}/:city/level/:level`, (req, res, next) => {
  if (req.params.level > 1) {
    // Avoid loading level directly
    res.redirect(`${URL_PREFIX}/${req.params.city}/level/1/`)
  } else {
    next()
  }
})

var saveHighscoreLimiter = new RateLimit({
  windowMs: 60000, // 1 min
  max: 1, // start blocking after 1 requests
  message: 'Too many highscore are being recorded from that IP address'
})

app.post(`${URL_PREFIX}/api/highscores`, saveHighscoreLimiter, (req, res) => {
  let highscore = {
    date: new Date(),
    name: req.body.name,
    email: req.body.email,
    newsletter: req.body.newsletter,
    link: req.body.link,
    score: req.body.score,
    city: req.body.city
  }

  // Insert in DB
  DBManager.insertHighscore(highscore).then(() => {
    // Determine rank of this score
    DBManager.getRankOfHighscore(highscore.score).then(rank => {
      highscore.rank = rank + 1
      res.json(rank)
    })
  })
})

app.get(`${URL_PREFIX}/api/highscores`, (req, res) => {
  DBManager.getHighscores(50).then(highscores => {
    res.json(highscores)
  })
})

app.use(`${URL_PREFIX}/`, express.static('out'))

app.listen(port, () => console.log(`> Ready on http://localhost:${port}`))
