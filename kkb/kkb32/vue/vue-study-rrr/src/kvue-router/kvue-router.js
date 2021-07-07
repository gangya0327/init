let Vue;

class VueRouter {

}

// 参数1是Vue的构造函数，可以对其进行扩展
// eslint-disable-next-line func-names
VueRouter.install = function (_Vue) {
  Vue = _Vue;

  // 1 注册$router，让所有组件实例都可以访问它
  // 延迟执行，到router实例和vue实例都创建完毕
  // 混入 Vue.mixin({})
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // 如果存在，说明是根实例
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 2 注册两个全局组件router-view和router-link
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      // h是render函数调用时，框架传入的createElement
      // return <a href={`#${this.to}`}>{this.$slots.default}</a>;
      return h('a', {
        attrs: {
          href: `#${this.to}`,
        },
      }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render: (h) => h('div', 'router-view'),
  });
};

export default VueRouter;
