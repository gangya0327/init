import Vue from 'vue'
import Vuex from 'vuex'
import persist from './plugins/persist'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  strict: true, // 严格模式，防止用户手动修改state
  plugins: [persist]
})
