import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 90
  },
  mutations: {
    add(state) {
      state.counter += 1
    }
  },
  actions: {
    add({ commit }) {
      commit('add')
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  }
})