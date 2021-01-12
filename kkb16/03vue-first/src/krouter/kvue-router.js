import View from './krouter-view'
import Link from './krouter-link'

let Vue
// 实现一个插件，挂在$router

class KVueRouter {
  constructor(options) {
    this.$options = options

    // 需要创建响应式的current属性
    Vue.util.defineReactive(this, 'current', '/')

    // this.app = new Vue({
    //   data() {
    //     return {
    //       current: '/'
    //     }
    //   }
    // })

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建一个路由映射表
    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange() {
    console.log(window.location)
    this.current = window.location.hash.slice(1)
  }
}

KVueRouter.install = function(_Vue) {
  // 保存构造函数，在KVueRouter里使用
  Vue = _Vue
  // 挂载$router
  // 获取实例中的router选项
  Vue.mixin({
    beforeCreate() {
      // 确保根实例时才执行
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 实现两个全局组件router-link，router-view
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default KVueRouter