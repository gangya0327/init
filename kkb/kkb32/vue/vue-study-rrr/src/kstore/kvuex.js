/**
 * 实现一个Store类
 * 1. 维持一个响应式状态state
 * 2. 实现commit
 * 3. 实现dispatch
 *
 * 挂载$store
 */

let Vue;

class Store {
  constructor(options) {
    // 1. 保存选项
    this.$options = options;
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._wrappedGetters = options.getters;

    // 定义computed选项
    const computed = {}
    this.getters = {}
    const store = this
    Object.keys(this._wrappedGetters).forEach(key => {
      // console.log(`key`, key)
      // 获取用户定义的getters
      const fn = store._wrappedGetters[key]
      // 转换为computed可以使用的无参数形式
      computed[key] = function() {
        return fn(store.state)
      }
      // 为getters定义只读属性
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })

    // 2. 暴露state属性
    // Vue.util.defineReactive(this, 'state', this.$options.state);
    // _vm希望用户不要访问他
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state,
        };
      },
      computed: computed
    });

    // 绑定上下文，确保是store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state;
  }

  set state(v) {
    console.error('please use replaceState to reset state');
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    if (!entry) {
      console.error('unknow mutation')
      return
    }
    entry(this.state, payload)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (!entry) {
      console.error('unknow action')
      return
    }
    entry(this, payload)
  }
}

function install(_Vue) {
  Vue = _Vue;

  // 注册$store
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { Store, install };
