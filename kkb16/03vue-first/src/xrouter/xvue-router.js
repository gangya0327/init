import View from './xrouter-view'
import Link from './xrouter-link'

let Vue
class XVueRouter {
  constructor(options) {
    this.$options = options
    Vue.util.defineReactive(this, 'current', '/')
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
    console.log('this.routeMap', this.routeMap)
  }
  onHashChange() {
    this.current = window.location.hash.slice(1)
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