const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const { UsageState } = require('webpack')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]_[hash:6].js'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    port: 8082,
    hot: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: 'http://localhost:9090'
      }
    },
    before(app, server) {
      app.get('/api/info', (req, res) => {
        res.json({
          message: 'hello'
        })
      })
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name]_[hash:6].css'
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '我的webpack'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:6].[ext]',
            outputPath: 'images',
            limit: 2 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   // 语法转换插件
          //   presets: [
          //     [
          //       '@babel/preset-env', {
          //         targets: {
          //           edge: '17',
          //           firefox: '60',
          //           chrome: '67',
          //           safari: '11.1'
          //         },
          //         corejs: 2, // 制定核心库版本
          //         useBuiltIns: 'usage', // 按需加载
          //       }
          //     ],
          //     "@babel/preset-react"
          //   ]
          // }
        }
      }
    ]
  }
}