// module.exports = {
//   transpileDependencies: true
// }

// 两个插件分别负责打包客户端和服务端
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')

// 根据传入环境变量决定入口文件和相应配置
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

module.exports = {
  css: {
    extract: true
  },
  outputDir: './dist/' + target,
  configureWebpack: () => ({
    // 将entry指向应用程序的server/client文件
    entry: `./src/entry-${target}.js`,
    // 对bundle renderer提供source map支持
    devtool: 'source-map',
    // target设置为node使webpack以node适用的方式动态导入
    // 并且还会在编译vue组件时告知’vue-loader'输出面向服务器代码
    target: TARGET_NODE ? 'node' : 'web',
    // 是否模拟node全局变量
    node: TARGET_NODE ? undefined : false,
    output: {
      // 此处使用node风格导出模块
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined,
    },
    externals:
      TARGET_NODE ? nodeExternals({
        // 不要外置化webpack需要处理的依赖模块
        // 可以在这里添加更多的文件类型，如未处理的vue原始文件
        // 还应该将‘global’（如polyfill）的依赖模块列入白名单
        allowlist: [/\.css$/]
      }) : undefined,
    optimization: {
      splitChunks: undefined
    },
    // 这是将服务器的整个输出构建成一个json文件的插件
    // 服务端默认文件名为‘vue-ssr-server-bundle.json’
    // 客户端默认文件名为‘vue-ssr-client-manifest.json’
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()],
  }),
  chainWebpack: config => {
    // cli4项目添加
    if (TARGET_NODE) {
      config.optimization.delete('splitChunks')
    }
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(option => {
        merge(option, {
          optimizeSSR: true
        })
      })
  }
}