const fs = require('fs')
const http = require('http')
const path = require('path')

const resolvePath = require('resolve-path')

http.createServer(function(req, res) {
  const rootDir = path.join(__dirname, 'static')
  const file = resolvePath(rootDir, req.url)

  try {
    fs.readFile(file, function(err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
      res.end(data)
    })
  } catch (error) {
    console.log(`error`, error)
    res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' })
    res.end('找不到对应资源')
  }
}).listen(8081)

console.log('server is listening on port 8081')

// http://localhost:8081/test.json
// http://localhost:8081/test1.json
// http://localhost:8081/?/../../private.js