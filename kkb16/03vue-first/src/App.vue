<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <parent msg="Welcome to Your Vue.js App" />
    <slots></slots>
  </div>
</template>

<script>
import Parent from './components/communicate/Parent'
import Slots from './components/slot/Slots'

export default {
  name: 'App',
  components: {
    Parent,
    Slots,
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
  margin-top: 60px;
}
</style>
