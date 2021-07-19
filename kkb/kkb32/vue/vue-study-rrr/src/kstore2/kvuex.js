let Vue

class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this._getters = options.getters

    // Vue.util.defineReactive(this, 'state', options.state)
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state
        }
      }
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('you cannot set state')
  }
  // get getters() {
  //   console.log(this._getters)
  //   const getters = null
  //   for (let i in this._getters) {
  //     console.log(this._getters[i]())
  //     getters[i] = this._getters[i]()
  //   }

  //   return getters
  // }

  // this.commit=

  commit(type) {
    const entry = this._mutations[type]
    if (!entry) {
      console.error('unknow mutation')
      return
    }
    entry(this.state)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    console.log(entry)
    if (!entry) {
      console.error('unknow action')
      return
    }
    console.log(this)
    entry(this, payload)
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

export default { Store, install }