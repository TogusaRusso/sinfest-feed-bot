'use strict'

const Telegram = require('node-telegram-bot-api')
const parser = require('./parser')

const tg = new Telegram(process.env.TOKEN)

parser((url) => {
  tg.sendPhoto('@' + process.env.CHANNEL, url)
})
