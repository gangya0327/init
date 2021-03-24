const express = require('express')

// express实例
const server = express()

// 编写路由处理不同url请求
server.get('/', (req, res)=>{
  res.send('<h1>hello world</h1>')
})

// 监听
server.listen(80, ()=>{
  console.log('server running')
})