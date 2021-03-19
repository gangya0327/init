const argv = require('args-parser')(process.argv.slice(2))
const merge = require('webpack-merge')
const _mode = argv.mode || 'development'
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
console.log('argv', argv)
webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: "[name]_[local]-[hash:base64:5]",
            },
          },
        }],
        // use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'],
      }
    ]
  }
}

module.exports = merge(webpackConfig, _webpackConfig)