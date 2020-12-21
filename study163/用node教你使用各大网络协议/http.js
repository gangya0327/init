const http = require('http')
http.createServer((req, res) => {
  res.end('hello http')
}).listen(3001)