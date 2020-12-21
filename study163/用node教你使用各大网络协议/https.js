/*
生成私钥
openssl genrsa 1024 > /path/to/private.pem
根据私钥生成公钥
openssl req -new -key /path/to/private.pem -out csr.pem
根据公钥和私钥生成证书
openssl x509 -req days 365 in csr.pem -signkey private.pem -out file.crt
*/

const https = require('https')
const fs = require('fs')
var options = {
  key: fs.readFileSync('./keys/private.pem'),
  cert: fs.readFileSync('./keys/file.crt')
}
https.createServer(options, (req, res) => {
  res.end('hello https')
})