// 保存构造函数引用，避免import
let Vue

class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions

    // 响应化处理state
    // this.state = new Vue({
    //   data: options.state
    // })
    this._vm = new Vue({
      data: {
        // 加两个$，Vue不作代理
        $$state: options.state
      }
    })

    // 绑定commit，dispatch的上下文store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // 存取器
  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('不能直接修改state')
  }

  // store.commit('add', 2)
  // type: mutation类型
  // payload: 载荷
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

// Vuex
export default {
  Store,
  install
}