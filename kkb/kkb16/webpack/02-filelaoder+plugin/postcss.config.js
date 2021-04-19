const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    // autoprefixer(
    //   // postcss 使用autoprefixer添加前缀的标准
    //   "IE 10"
    // )
    autoprefixer({
      // 兼容最新两个大版本
      // 全球浏览器份额大于1%
      overrideBrowserslist: ['last 2 versions', '>1%']
    })
  ]
}