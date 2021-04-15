import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 创建一个以svg目录为上下文的require函数
const req = require.context('./svg', false, /\.svg$/)
// keys()会获取所有svg文件
console.log(`req`, req.keys())
req.keys().map(req)

Vue.component('svg-icon', SvgIcon)