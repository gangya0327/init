const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './myLoaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [
        //   path.resolve(__dirname, './myLoader2/index.js'),
        //   {
        //     loader: path.resolve(__dirname, './myLoader/index.js'),
        //     options: {
        //       name: 'kkb'
        //     }
        //   },
        // ]
        use: [
          'kkbLoader',
          {
            loader: 'kkbLoaderAsync',
            options: {
              name: 'kkb'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'styleLoader',
          // 'cssLoader',
          'lessLoader',
        ]
      }
    ]
  }
}