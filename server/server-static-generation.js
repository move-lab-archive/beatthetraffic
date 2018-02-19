const express = require('express')
const next = require('next')
const DBManager = require('./db/DBManager')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Init connection to db
DBManager.init().then(
  () => {
    console.log('Success init db')
  },
  err => {
    console.error(err)
  }
)

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.get('/:city/level/:level', (req, res) => {
    return app.render(req, res, '/', {
      city: req.params.city,
      level: parseInt(req.params.level, 10)
    })
  })

  // Easier for DEV MODE
  server.post('/api/highscores', (req, res) => {
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

  server.get('/api/highscores', (req, res) => {
    DBManager.getHighscores(50).then(highscores => {
      res.json(highscores)
    })
  })
  // EASIER FOR DEV MODE

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
