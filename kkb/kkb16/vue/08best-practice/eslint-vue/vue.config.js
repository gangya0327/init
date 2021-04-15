module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true,
            cache: false,
            failOnError: false,
            rules: {
              // indent: ['error', 4],
            },
          },
        },
      ],
    },
  },
}
