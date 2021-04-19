const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack是基于nodejs,遵循commonjs规范
const path = require('path')
// console.log("当前路径：", process.cwd())
// /Users/peterraven/gangya0327/init/kkb/kkb16/webpack/01base

module.exports = {
  // 上下文 项目打包的相对路径
  // context: process.cwd(),

  // 执行构建的入口
  // 单个文件打包
  // entry: "./src/index.js",

  // 多个文件打包成一个文件
  // entry: ["./src/index.js", "./src/other.js"],

  // 多入口，对象形式，多键值对，应用于多页面
  entry: {
    main: "./src/index.js",
    other: "./src/other.js"
  },
  output: {
    // 构建出来的文件资源的绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 构建出来的文件资源名称
    filename: "[name]-[hash:6].js",
    /**
     * 占位符
     * hash 整个项目的hash值，每构建一次，会有一个新的hash值
     * chunkhash 根据不同入口entry进行依赖解析，构建对应的chunkhash值，只要entry不变，对应chunkhash不变
     * name
     * id
     */
  },
  mode: "development",
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
  ],
  // 模块处理
  module: {
    rules: [
      {
        test: /\.css$/,
        /**
         * loader执行顺序是从后往前
         * css-loader是把css模块内容加入到js模块中，称为css in js
         * style-loader 从js中提取css的loader，在html中创建style标签，把css内容放进style里
         */
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
