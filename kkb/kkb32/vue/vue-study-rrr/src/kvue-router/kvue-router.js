import KRouterView from './krouter-view'
import KRouterLink from './krouter-link'

let Vue;

class VueRouter {
  constructor(options) {
    // 1. 保存路由选项
    this.$options = options;

    // 初始值，并变成响应式
    // Vue.util.defineReactive(this, 'current', '/',);
    this.current = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'matched', []);
    // 递归遍历路由表，获取匹配关系数组
    this.match()

    // 2. 监控hash变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建路由表
    // this.routeMap = {}
    // options.routes.forEach(route => {
    //   this.routeMap[route.path] = route
    // })
  }

  onHashChange() {
    this.current = window.location.hash.slice(1) || '/'
    this.matched = []
    this.match()
  }
  match(routes) {
    routes = routes || this.$options.routes
    for (const route in routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
        return
      }
      if (route.path !== '/' && this.current.indexOf(route.path) !== -1) {
        this.matched.push(route)
        if (route.children) {
          this.match(route.children)
        }
        return
      }
    }
  }
}



// eslint-disable-next-line func-names
VueRouter.install = function(_Vue) {
  // 传入构造函数，对其进行扩展
  Vue = _Vue;

  // 1. 注册$router，让所有组件都可使用

  // 混入
  Vue.mixin({
    beforeCreate() {
      // 延迟执行，等到router实例和vue实例都创建完毕
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 2. 注册全局组件router-view，router-link
  // <router-link to="/home">Home</router-link>
  // <a href="#/home">home</a>
  Vue.component('router-link', KRouterLink);
  Vue.component('router-view', KRouterView);
};

export default VueRouter;
