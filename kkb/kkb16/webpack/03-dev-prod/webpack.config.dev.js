const baseConfig = require('./webpack.config.base')

const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]_[hash:6].js',
  },
  devtool: 'cheap-inline-eval-source-map',
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
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './src'),
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
        include: path.resolve(__dirname, './src'),
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
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '我的webpack',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(baseConfig, devConfig)