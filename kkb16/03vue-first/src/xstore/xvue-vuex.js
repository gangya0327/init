let Vue
class Store {
  constructor(options) {
    // this.state = new Vue({
    //   data: options.state
    // })

    this._actions = options.actions
    this._mutations = options.mutations
    this._wrappedGetters = options.getters

    // 定义computed选项
    const computed = {}
    this.getters = {}
    const store = this
    console.log('this._wrappedGetters', Object.keys(this._wrappedGetters))
    Object.keys(this._wrappedGetters).forEach(key => {
      // 获取用户定义的getter
      const fn = store._wrappedGetters[key]
      // 转换为computed可以使用无参数形式
      computed[key] = function() {
        return fn(store.state)
      }
      // 为getters定义只读属性
      console.log('store.getters', store.getters)
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })

    this._vm = new Vue({
      data: {
        $$state: options.state
      },
      computed
    })

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  get state() {
    return this._vm.$data.$$state
  }
  set state(v) {
    console.error('不能修改为 ', v)
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }
  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}

function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}