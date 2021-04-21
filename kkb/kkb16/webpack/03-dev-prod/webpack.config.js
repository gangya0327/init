const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]_[hash:6].js',
    // 将资源部署到cdn上
    publicPath: 'http://cdn.xxx.com/assets/'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
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
  // 已配置cdn资源，导入时不会打包
  externals: {
    // jquery通过script引入后，全局中有了
    'jquery': 'jQuery'
  },
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
    new webpack.HotModuleReplacementPlugin(),
  ],
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