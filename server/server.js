const RateLimit = require('express-rate-limit')
const geoip = require('geoip-lite')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const Geo = require('./geo')
const availableCities = require('../gameconfig.json').availableCities
const defaultCity = require('../gameconfig.json').defaultSelectedCity
const DBManager = require('./db/DBManager')
const nextApp = require('next')

const app = express()
const nextInstance = nextApp()
const handle = nextInstance.getRequestHandler()

// Init connection to db
DBManager.init().then(
  () => {
    console.log('Success init db')
  },
  err => {
    console.error(err)
  }
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
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
  } else if (req.params.city === 'about') {
    console.log('about page')
    next()
  } else {
    console.log('highscores')
    // SSR render highscores
    handle(req, res)
  }
})

var saveHighscoreLimiter = new RateLimit({
  windowMs: 60000, // 1 min
  max: 1, // start blocking after 1 requests
  message: 'Too many highscore are being recorded from that IP address'
})

app.post('/api/highscores', saveHighscoreLimiter, (req, res) => {
  let highscoreData = req.body

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

app.get('/api/highscores', (req, res) => {
  DBManager.getHighscores(50).then(highscores => {
    res.json(highscores)
  })
})

app.use(express.static('out'))

app.listen(4000, () => console.log('App listening on port 4000!'))
