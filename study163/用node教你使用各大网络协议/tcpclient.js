var net = require('net')

var client = net.Socket()
client.connect(3300, '127.0.0.1', function() {
  setInterval(() => {
    client.write('请求数据')
  }, 1000)
})

client.on('data', function(data) {
  console.log(data.toString())
})