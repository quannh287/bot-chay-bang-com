// install express with `npm install express`
const express = require('express')
const axios = require('axios')
const { App } = require('deta')
const { gemBotMySelfUrl, gemBotReportDailyUrl, dailyReportMessage, capaAppBot } = require('./src/Constant')

const app = App(express())

app.get('/', (req, res) => res.send('Welcome to bot-chay-bang-com GEM!'))

app.lib.cron((event) => {
  console.log('[event]', event)
  axios.post(capaAppBot, {
    text: dailyReportMessage,
  })
})

// export 'app'
module.exports = app
