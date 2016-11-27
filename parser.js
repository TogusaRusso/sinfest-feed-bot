'use strict'

const http = require('http')
const htmlparser = require('htmlparser2')

function ParseTitlePage () {
  const parser = new htmlparser.Parser({
    onopentag: (name, attr) => {
      if (name === 'img') console.log(attr.src)
    }
  }, {decodeEntities: true})
  const options = {
    hostname: 'www.sinfest.net',
    path: '/index.php',
    method: 'GET',
    headers: {
      'user-agent': 'Mozilla/5.0'
    }
  }
  http.get(options, (res) => {
    res.on('data', (chunk) => parser.write(chunk))
    .on('end', () => parser.end())
  })
  .on('error', (e) => console.error(e))
}

ParseTitlePage()
module.exports = ParseTitlePage
