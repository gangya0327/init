const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowsersList: ['last 2 versions', '>1%']
    })
  ]
}