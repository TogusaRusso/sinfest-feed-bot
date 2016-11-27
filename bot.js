'use strict'

const Telegram = require('node-telegram-bot-api')
const parser = require('./parser')
const MongoClient = require('mongodb').MongoClient

const dbUri = process.env.MONGOLAB_URI ||
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017'

MongoClient.connect(dbUri, { server: { auto_reconnect: true } }, (err, db) => {
  if (err) { return console.err(err) }
  console.log('Connected correctly to mongodb')

  const tg = new Telegram(process.env.TOKEN)
  const collection = db.collection('urls')

  parser((url) => {
    console.log(`url=${url}`)
    if (url) {
      collection.find({url: url}).toArray((err, urls) => {
        if (err) { return console.error(err) }
        if (urls.length === 0) {
          console.log(`that's new page`)
          console.log(`Sending ${url} to @${process.env.CHANNEL}`)
          tg.sendPhoto(`@${process.env.CHANNEL}`, url)
          collection.insertOne({url: url}, (err, result) => {
            if (err) { return console.error(err) }
            console.log('Saved new url in database')
            db.close()
          })
        } else {
          console.log('nothing new here')
          db.close()
        }
      })
    }
  })
})

