const express = require('express')

// express实例
const server = express()

const Vue = require('vue')
// 获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 编写路由处理不同url请求
server.get('/', (req, res) => {
  // res.send('<h1>hello world</h1>')
  // 创建vue实例
  const app = new Vue({
    template: '<div @click="onClick">hello {{message}}</div>',
    data() {
      return {
        message: 'ssr'
      }
    },
    methods: {
      onClick() {
        console.log('onclick')
      }
    }
  })

  // 用渲染器渲染vue实例
  renderer.renderToString(app).then(html => {
    console.log(html)
    res.send(html)
  }).catch(() => {
    res.status = 500
    res.send('Internal Server Error 500')
  })
})

// 监听
server.listen(80, () => {
  console.log('server running')
})