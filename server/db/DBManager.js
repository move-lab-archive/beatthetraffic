var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017'

class DBManager {
  contructor () {
    this.db = null
  }

  init () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          reject()
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
            console.log('Highscore inserted successfully')
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
          .count({ score: { $gt: score } }, (err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result)
            }
          })
      })
    })
  }
}

var DBManagerInstance = new DBManager()

module.exports = DBManagerInstance
