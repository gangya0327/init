import Vue from 'vue';
import Vuex from './kvuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1,
  },
  mutations: {
    add(state) {
      state.counter += 1;
    },
  },
  actions: {
    add(ctx) {
      setTimeout(() => {
        ctx.commit('add');
      }, 1000);
    },
  },
  getters: {
    doubleCounter(state) {
      return state.counter*2
    }
  }
});
