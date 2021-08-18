<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <!-- <svg>
          <use xlink:href="#icon-home"></use>
        </svg> -->
        <svg-icon icon-class="home"></svg-icon>
        Home</router-link
      >
      |
      <router-link to="/about">
        <svg-icon icon-class="about"></svg-icon>
        About</router-link
      >
      |
      <router-link to="/article">
        <svg-icon icon-class="article"></svg-icon>
        Article</router-link
      >
    </div>

    <p @click="$store.commit('add')">{{ $store.state.counter }}</p>
    <p @click="$store.dispatch('add')">async: {{ $store.state.counter }}</p>
    <p>getters: {{ $store.getters.doubleCounter }}</p>

    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log('服务端变量foo', process.env.foo)
    console.log('客户端变量dong', process.env.VUE_APP_DONG)
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
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
