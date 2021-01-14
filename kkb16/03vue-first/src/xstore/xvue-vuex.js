let Vue
class Store {
  constructor(options) {
    // this.state = new Vue({
    //   data: options.state
    // })
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })
    this._actions = options.actions
    this._mutations = options.mutations

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