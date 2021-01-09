export default {
  namespaced: true, // 独立的命名空间
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
    welcome: state => state.username + '，欢迎回来'
  },
  actions: {
    login({ commit }, username) {
      // 模拟api登录
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