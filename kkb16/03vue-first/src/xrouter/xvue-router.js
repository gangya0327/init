import View from './xrouter-view'
import Link from './xrouter-link'

let Vue
class XVueRouter {
  constructor(options) {
    this.$options = options
    // Vue.util.defineReactive(this, 'current', '/')
    this.current = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'matched', [])
    // 递归遍历路由表。获取匹配关系的数组
    this.match()

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // this.routeMap = {}
    // options.routes.forEach(route => {
    //   this.routeMap[route.path] = route
    // })
    // console.log('this.routeMap', this.routeMap)
  }
  onHashChange() {
    this.current = window.location.hash.slice(1)
    this.matched = []
    this.match()
  }
  match(routes) {
    routes = routes || this.$options.routes
    // 递归遍历
    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
        return
      }
      // 当前地址为/about/info
      if (route.path !== '/' && this.current.indexOf(route.path) != -1) {
        this.matched.push(route)
        if (route.children) {
          this.match(route.children)
        }
        return
      }
    }
  }
}

XVueRouter.install = function(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('router-view', View)
  Vue.component('router-link', Link)
}

export default XVueRouter