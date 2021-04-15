export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const token = app.$cookies.get('token')
    if (token) {
      // eslint-disable-next-line no-console
      console.log('nuxtServerInit: token: ' + token)
      commit('user/init', token)
    }
  },
}
