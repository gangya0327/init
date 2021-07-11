<template>
  <div>
    <button v-if="!isLogin" @click="login">登录</button>
    <button v-else @click="logout">注销</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  mounted() {
    console.log(mapActions(['user/login']))
  },
  computed: {
    // isLogin() {
    //   return this.$store.state.user.isLogin
    // },
    ...mapState('user', ['isLogin']),
  },
  methods: {
    ...mapActions(['user/login']),
    login() {
      // window.isLogin = true
      // this.$store
      //   .dispatch('user/login', 'admin')
      // this.$store.state.user.isLogin = true
      this['user/login']('admin')
        .then(() => {
          this.$router.addRoute({
            path: '/admin',
            name: 'Admin',
            meta: {
              auth: true,
            },
            component: () => import('@/views/Admin.vue'),
            children: [
              {
                path: '/admin/course/:name',
                name: 'detail',
                component: () => import('@/views/Detail.vue'),
              },
            ],
          })
          this.$router.push(this.$route.query.redirect)
        })
        .catch((err) => {
          console.log(err)
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