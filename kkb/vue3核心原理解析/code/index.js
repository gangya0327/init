// import { effect, ref, reactive } from './node_modules/@vue/reactivity/dist/reactivity.esm-browser.js'

// // 依赖收集，触发依赖
// const a = ref(20)

// let b

// effect(() => {
//   // 收集依赖
//   b = a.value * 10
//   console.log(b)
// })

// // 触发依赖
// a.value = 30

// // render
// function render(context) {
//   // view
//   effect(() => {
//     // vue3 update core
//     // 0. 需要优化
//     // 1. 公共逻辑，需要抽离出去
//     document.querySelector('#app').innerHTML = ``
//     const div = document.createElement('div')
//     div.innerText = context.count.value
//     document.querySelector('#app').append(div)
//   })
// }

// // setup
// function setup() {
//   const count = ref(0)
//   window.count = count
//   return {
//     count
//   }
// }

// render(setup())

import { createApp } from './core/index.js'
import { App } from './App.js'
createApp(App).mount(document.querySelector('#app'))