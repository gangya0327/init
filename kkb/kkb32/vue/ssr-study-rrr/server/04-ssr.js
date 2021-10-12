const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = dir => require('path').resolve(__dirname, dir)

const bundle = resolve('../dist/server/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: require('fs').readFileSync(resolve('../public/index.html'), 'utf-8'),
  clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json'))
})

// 获取express实例
const server = express()

// 开放dist/client目录，关闭默认下载index页的选项
server.use(express.static(resolve('../dist/client'), { index: false }))

// 编写路由处理不同url请求
server.get('*', async (req, res) => {
  try {
    const context = {
      url: req.url
    }
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (error) {
    res.status(500)
    res.send('Internal Server Error, 500!')
  }

})

// 监听端口
server.listen(8081, () => {
  console.log('server running')
})