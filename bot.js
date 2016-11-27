'use strict'

const Telegram = require('node-telegram-bot-api')
const parser = require('./parser')

const tg = new Telegram(process.env.TOKEN)

parser((url) => {
  console.log(`Sending ${url} to @${process.env.CHANNEL}`)
  tg.sendPhoto(`@${process.env.CHANNEL}`, url)
})
