const express = require('express')
const path = require('path')
const fs = require('fs')
const Vue = require('vue')

// express实例
const server = express()

// 获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 处理favicon
const favicon = require('serve-favicon')
server.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

// 编写路由处理不同url请求
server.get('*', (req, res) => {
  console.log(`req.url`, req.url)

  // 解析模板名称 /user
  const template = req.url.substr(1) || 'index'
  // 加载模板
  const buffer = fs.readFileSync(path.join(__dirname, `${template}.html`))

  // 创建vue实例
  const app = new Vue({
    template: buffer.toString(), // 转换为模板字符串
    data() {
      return {
        message: 'vue ssr'
      }
    },
  })

  // 用渲染器渲染vue实例
  renderer.renderToString(app).then(html => {
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