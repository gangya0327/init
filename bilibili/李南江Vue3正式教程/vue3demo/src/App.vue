<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>{{count}}</div>
  <button @click="myFn">button</button>
</template>

<script>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    // let count = 0
    let count = ref(0)
    function myFn() {
      console.log(count.value)
      count.value += 1
    }
    return { count, myFn }
  },
}
</script>
