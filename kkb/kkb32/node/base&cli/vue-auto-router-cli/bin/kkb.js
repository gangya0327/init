#!/usr/bin/env node
// 指定解释器类型

// 定制命令界面
const program = require('commander')
program.version(require('../package.json').version)

program
  .command('init <name>')
  .description('init project')
  // .action(name => {
  //   console.log('init' + name)
  // })
  .action(require('../lib/init'))

program.parse(process.argv)