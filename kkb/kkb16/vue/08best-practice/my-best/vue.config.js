const port = 3031
const title = '我的最佳实践'

const path = require('path')
// 获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: '/best-practice',
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  },
  chainWebpack(config) {
    // 修改当前项目默认svg配置：排除icons目录
    config.module.rule('svg')
      .exclude.add(resolve('./src/icons'))
    // 新增一个规则rule：添加icons里有svg
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}