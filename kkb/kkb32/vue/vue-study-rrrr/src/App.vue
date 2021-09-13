<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Child1 msg="some msg from app" name="child" @appEvent="appEvent"></Child1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Child1 from '@/components/Child1.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Child1,
  },
  data() {
    return {};
  },
  provide() {
    return {
      appMsg: 'app msg',
      foo: 'foo',
    };
  },
  methods: {
    appEvent() {
      console.log('appEvent');
    },
  },
};
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
