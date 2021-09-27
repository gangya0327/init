// node服务器 koa，express，egg
const express = require('express')
const app = express()

// 服务器渲染模块
const { createRenderer } = require('vue-server-renderer')

// 获取渲染器
const renderer = createRenderer()
const Vue = require('vue')

// 路由
app.get('/', async (req, res) => {
  // 创建vue应用
  const vm = new Vue({
    template: '<div>hello {{name}}</div>',
    data: {
      name: 'peter'
    }
  })
  try {
    const html = await renderer.renderToString(vm)
    res.send(html)
  } catch (error) {
    res.status(500).send('Internal Error ' + error)
  }
})

// 监听
app.listen(8081)