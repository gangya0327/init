const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const webpack = require('webpack')
const path = require('path')

// 分析每个插件的运行时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()

// 分析打包后的模块依赖关系
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

// const HappyPack = require('happypack')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]_[hash:6].js',
  },
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
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
  optimization: {
    usedExports: true, // 模块被使用了则会被打包
    // splitChunks: {
    //   chunks: 'all', // 所有chunks代码公共部分分离出来，initial 同步模块 async 异步模块
    //   minSize: 30000, // 最小尺寸，当模块大于30kb
    //   maxSize: 0, // 对模块进行二次分割，不推荐
    //   minChunks: 1, // 最少有几次引用了这个模块才进行分割
    //   maxInitialRequests: 3, // 最大初始化请求数，默认3
    //   automaticNameDelimiter: '->', // 打包分隔符
    //   name: true, // 打包后的名称
    //   cacheGroups: { // 缓存组
    //     lodash: {
    //       test: /lodash/,
    //       name: 'lodashs'
    //     },
    //     react: {
    //       test: /react|react-dom/,
    //       name: 'reacts'
    //     }
    //   },
    // },
    // 作用域提升
    concatenateModules: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash:6].css'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new PurifyCSS({
      // 清除无用css
      paths: glob.sync([
        // 做css的tree shaking
        path.resolve(__dirname, './src/*.html'),
        path.resolve(__dirname, './src/*.js'),
      ])
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/react-manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '我的webpack',
    }),
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
  }
}

module.exports = smp.wrap(config)