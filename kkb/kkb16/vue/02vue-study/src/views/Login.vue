<template>
  <div>
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    // isLogin() {
    //   return this.$store.state.user.isLogin
    // },
    ...mapState('user', ['isLogin']),
  },
  methods: {
    ...mapActions('user', ['login']),
    ...mapActions(['user/login', 'user/logout']),
    login() {
      // window.isLogin = true
      // this.$store.commit('login')
      // this.$store.dispatch('user/login', 'admin')
      this['user/login']('admin')
        .then(() => {
          // 动态添加路由
          this.$router.addRoutes([
            {
              path: '/admin',
              name: 'Admin',
              meta: { auth: true },
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
                import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
              children: [
                {
                  path: '/admin/course/:name',
                  name: 'detail',
                  component: () => import('../views/Detail.vue'),
                },
              ],
            },
          ])
          this.$router.push(this.$route.query.redirect)
        })
        .catch(() => {
          alert('用户名或密码错误')
        })
    },
    logout() {
      // window.isLogin = false
      this.$store.commit('user/logout')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>