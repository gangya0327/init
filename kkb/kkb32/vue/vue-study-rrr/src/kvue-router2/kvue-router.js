let Vue;

class VueRouter {
  constructor(options) {
    this.$options = options;

    Vue.util.defineReactive(
      this,
      'current',
      window.location.hash.slice(1),
    );

    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

// eslint-disable-next-line func-names
VueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    render(h) {
      return h('a', { attrs: { href: `#${this.to}` } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      let component = null;
      const route = this.$router.$options.routes.find((r) => r.path === this.$router.current);
      if (route) component = route.component;
      return h(component);
    },
  });
};

export default VueRouter;
