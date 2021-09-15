/* eslint-disable no-param-reassign */
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  publicPath: '/best',
  devServer: {
    port: 2021,
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       comps: path.join(__dirname, 'src/components'),
  //     },
  //   },
  // },
  configureWebpack(config) {
    config.resolve.alias.comps = path.join(__dirname, 'src/components');
    // 根据不同环境做不同配置
    if (process.env.NODE_ENV === 'development') {
      config.name = 'vue 最佳实践';
    } else {
      config.name = 'best practice';
    }
  },
  chainWebpack(config) {
    // 1. 组件svg规则加载icons、svg中的图标
    config.module.rule('svg').exclude.add(resolve('src/icons'));
    // 2. 配置svg-sprite-loader仅加载icons中的图标
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });
  },
};
