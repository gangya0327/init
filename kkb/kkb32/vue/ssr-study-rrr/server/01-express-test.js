const express = require('express')

// 获取express实例
const server = express()

// 编写路由处理不同url请求
server.get('/', (req, res) => {
  res.send('<p><h2>hello world</h2></p>')
  // res.json()
})

// 监听端口
server.listen(8081, () => {
  console.log('server running')
})