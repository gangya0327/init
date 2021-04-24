// 构建动态链接库

const path = require('path')
const { DllPlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, './dll'),
    filename: '[name].dll.js',
    library: 'kkb2react'
  },
  plugins: [
    new DllPlugin({
      // manifest.json文件的输出位置
      path: path.resolve(__dirname, './dll', '[name]-manifest.json'),
      // 定义打包的公共vendor文件对外暴露的函数名，要与library名一致
      name: 'kkb2react'
    })
  ]
}