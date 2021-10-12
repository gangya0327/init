import Vue from 'vue'
import App from './App.vue'

import createRouter from './router'

Vue.config.productionTip = false


// 返回一个工厂函数
export default function crateApp(context) {
  // 处理首屏，要先处理路由
  const router = createRouter()
  const app = new Vue({
    router,
    context,
    render: h => h(App),
  })
  return { app, router }
}

