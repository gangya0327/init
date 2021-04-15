<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="$store.commit('add')">counter {{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async counter {{$store.state.counter}}</p>
    <p>adoubleCounter {{$store.getters.doubleCounter}}</p>
    <button @click="changeCounter">修改state counter</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeCounter() {
      this.$store.state = 3
      // this.$store.state.counter = 3
    },
  },
}
</script>
