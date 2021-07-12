let Vue;

class VueRouter {
  constructor(options) {
    // 1. 保存路由选项
    this.$options = options;

    // 初始值，并变成响应式
    Vue.util.defineReactive(
      this,
      'current',
      window.location.hash.slice(1) || '/',
    );
    // 2. 监控hash变化
    window.addEventListener('hashchange', () => {
      // hash #/home
      this.current = window.location.hash.slice(1) || '/';
      console.log(this.current);
    });
  }
}

// eslint-disable-next-line func-names
VueRouter.install = function (_Vue) {
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
  Vue.component('router-link', {
    render(h) {
      // console.log(this.$attrs);
      // return <a href={this.$attrs.to}>{this.$slots.default}</a>;
      return h('a', { attrs: { href: `#${this.$attrs.to}` } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      // return h(Home);
      let component = null;
      // 1. 获取当前url的hash部分
      // console.log(this.$router.current);
      // 2. 根据hash部分从路由表获取对应组件
      const route = this.$router.$options.routes.find((r) => r.path === this.$router.current);
      if (route) { component = route.component; }
      return h(component);
    },
  });
};

export default VueRouter;
