import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// store工厂，创建独立状态管理
export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      add(state) {
        state.count += 1
      },
      init(state, count) {
        state.count = count
      }
    },
    actions: {
      getCount({ commit }) {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('init', Math.random() * 100)
            resolve()
          }, 1000);
        })
      }
    }
  })
}