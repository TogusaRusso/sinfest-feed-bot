'use strict'

const http = require('http')

const ip = process.env.IP || 'localhost'
const port = process.env.PORT || 8080
const url = `https://telegram.me/${process.env.CHANNEL}`

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(`This is Sinfest bot on <a href = '${url}'>${url}</a>`)
})

server.listen(port)

console.log(`Server listening at http://${ip}:${port}/`)
