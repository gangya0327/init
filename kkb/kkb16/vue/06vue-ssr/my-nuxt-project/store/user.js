export const state = () => ({
  token: '',
})

export const mutauions = {
  init(state, token) {
    state.token = token
  },
}

export const getter = {
  isLogin(state) {
    return !!state.token
  },
}

export const actions = {
  login({ commit, getters }, u) {
    return this.$login('/api/login', u).then(({ token }) => {
      if (token) {
        commit('init', token)
      }
      return getters.isLogin
    })
  },
}
