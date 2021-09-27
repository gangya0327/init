

const express = require('express')
const Vue = require('vue')
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()
// 获取express实例
const server = express()

// 编写路由处理不同url请求
server.get('/', (req, res) => {

  const app = new Vue({
    template: '<div @click="onClick">hello {{msg}}</div>',
    data() {
      return {
        msg: 'peter'
      }
    },
    methods: {
      onClick() {
        console.log('click me')
      }
    }
  })

  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(() => {
    res.status(500)
    res.send('Internal Server Error, 500!')
  })

})

// 监听端口
server.listen(8081, () => {
  console.log('server running')
})