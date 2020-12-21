const net = require('net')
var server = net.createServer(function() {
  // 此回调有连接建立时调用
  console.log('someone connect')
})

server.on('connection', function(Socket) {
  Socket.write('登录成功')
  Socket.on('data', function() {
    Socket.write('数据获取成功')
  })
})

server.on('close', function() {

})

server.on('close', function() {

})

server.listen(3300)