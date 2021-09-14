<template>
  <div id="app">
    <img class="inline-block" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Tailwind-Test></Tailwind-Test>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TailwindTest from '@/components/TailwindTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TailwindTest
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
