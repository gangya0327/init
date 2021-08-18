import Vue from 'vue'
import SvgIcon from 'comps/SvgIcon'

// 1. 自动加载svg中所有图标
// context返回一个指定目录的加载方法
const req = require.context('./svg', false, /\.svg$/)
// keys返回指定上下文中所有匹配文件名称
req.keys().forEach(key=>req(key))
// req.keys().map(req) 简化体

// 2. 注册svg-icon组件
Vue.component('svg-icon', SvgIcon)