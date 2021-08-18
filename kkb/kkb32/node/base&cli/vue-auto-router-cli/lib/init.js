// 搭建一个脚手架

const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('../lib/download')

module.exports = async name => {
  // 打印欢迎界面
  clear()

  const data = await figlet('kkb welcome')
  console.log(data)

  await clone('github:xxx', name)
}