<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>

      <div v-if="isLogin">
        <span>{{ welcome }}</span>
        <button @click="logout">注销</button>
      </div>
    </div>

    <keep-alive include="admin" max="10">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['isLogin']),
    ...mapGetters('user', ['welcome']),
  },
  methods: {
    ...mapMutations(['user/logout']),
    logout() {
      this['user/logout']()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
