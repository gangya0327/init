const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  resolve: {
    // 查找第三方依赖
    modules: [path.resolve(__dirname, './node_modules')],
    // 别名
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/umd/react-dom.production.min.js'),
      '@': path.resolve(__dirname, './src')
    },
    // 文件后缀省略
    extensions: ['.js', '.json', 'jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}