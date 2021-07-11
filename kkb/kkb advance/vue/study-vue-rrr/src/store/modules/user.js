export default {
  namespaced: true, // 设置独立命名空间，避免冲突
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    login(state, username) {
      state.username = username
      state.isLogin = true
    },
    logout(state) {
      state.username = ''
      state.isLogin = false
    },
  },
  getters: {
    welcome(state) {
      return state.username + '， 欢迎回来'
    }
  },
  actions: {
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            commit('login', username)
            resolve()
          } else {
            reject()
          }
        }, 1000);
      })
    }
  },
}