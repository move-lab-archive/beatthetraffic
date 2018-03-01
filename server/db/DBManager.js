var MongoClient = require('mongodb').MongoClient

var mongoURL = 'mongodb://localhost:27017'

// Where "mongo" is the name of the service in the docker-compose.yml file
if (process.env.DOCKER_DEPLOY) {
  mongoURL = 'mongodb://mongo:27017'
}

if (process.env.NOW_DEPLOY) {
  mongoURL =
    'mongodb://beatthetraffic:beatthetraffic@ds243418.mlab.com:43418/beatthetraffic'
}

if (process.env.NODE_ENV === 'production') {
  mongoURL = process.env.MONGO_INSTANCE
}

class DBManager {
  contructor () {
    this.db = null
  }

  init () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoURL, (err, client) => {
        if (err) {
          reject(err)
        } else {
          let db = client.db('beatthetraffic')
          this.db = db

          // Get the highscore collection
          const collection = db.collection('highscores')
          // Create the index
          collection.createIndex({ score: -1 })

          resolve(db)
        }
      })
    })
  }

  getDB () {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db)
      } else {
        return this.init()
      }
    })
  }

  insertHighscore (highscore) {
    return new Promise((resolve, reject) => {
      this.getDB().then(db => {
        db.collection('highscores').insertOne(highscore, (err, r) => {
          if (err) {
            reject(err)
          } else {
            resolve(r)
          }
        })
      })
    })
  }

  getHighscores (limit) {
    return new Promise((resolve, reject) => {
      this.getDB().then(db => {
        db
          .collection('highscores')
          .find({})
          .project({ name: 1, score: 1, link: 1, city: 1 })
          .sort({ score: -1 })
          .limit(limit)
          .toArray(function (err, docs) {
            if (err) {
              reject(err)
            } else {
              resolve(docs)
            }
          })
      })
    })
  }

  getRankOfHighscore (score) {
    return new Promise((resolve, reject) => {
      this.getDB().then(db => {
        db
          .collection('highscores')
          .count({ score: { $gte: score } }, (err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result - 1)
            }
          })
      })
    })
  }
}

var DBManagerInstance = new DBManager()

module.exports = DBManagerInstance
