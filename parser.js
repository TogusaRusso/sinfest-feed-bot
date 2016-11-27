'use strict'

const http = require('http')

function ParseTitlePage () {
  let options = {
    hostname: 'www.sinfest.net',
    path: '/index.php',
    method: 'GET',
    headers: {
      'user-agent': 'Mozilla/5.0'
    }
  }
  let data = ''
  http.get(options, (res) => {
    res.on('data', (chunk) => data += chunk)
    .on('end', () => console.log(data))
  })
  .on('error', (e) => console.error(e))
}

ParseTitlePage()
module.exports = ParseTitlePage
