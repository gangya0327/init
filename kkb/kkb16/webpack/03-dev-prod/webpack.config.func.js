const baseConfig = require('./webpack.config.base')
const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
const { merge } = require('webpack-merge')

console.log(`process.env.NODE_ENV`, process.env.NODE_ENV)
console.log(`process.env`, process.env)

module.exports = (env) => {
  console.log(`env`, env)
  if (env && env.production) {
    return merge(baseConfig, prodConfig)
  } else {
    return merge(baseConfig, devConfig)
  }
}