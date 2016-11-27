'use strict'

const http = require('http')
const htmlparser = require('htmlparser2')

const hostname = 'www.sinfest.net'

function ParseTitlePage (callback) {
  const parser = new htmlparser.Parser({
    onopentag: (name, attr) => {
      if (name === 'img' && attr.src.indexOf('btphp') !== -1) {
        console.log(`Parsed url: ${attr.src}`)
        callback(hostname + '/' + attr.src)
      }
    }
  }, {decodeEntities: true})
  const options = {
    hostname: hostname,
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

//Uncomment if want to test this module alone
//ParseTitlePage((url) => console.log(url))

module.exports = ParseTitlePage
