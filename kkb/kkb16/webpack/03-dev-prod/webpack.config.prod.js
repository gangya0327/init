const baseConfig = require('./webpack.config.base')

const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name]_[hash:6].js',
    // 将资源部署到cdn上
    publicPath: 'http://cdn.xxx.com/assets/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './src'),
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash:6].css'
    }),
    // new OptimizeCSSAssetsPlugin({
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: {
    //     preset: ['default', { discardComments: { removeAll: true } }],
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '我的webpack',
      minify: {
        // 压缩html文件
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除空白符和换行符
        minifyCSS: true, // 压缩内联css
      }
    }),
  ]
}

module.exports = merge(baseConfig, prodConfig)