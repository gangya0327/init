<template>
  <h2>子组件</h2>
  <h3>{{msg}}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: 'hello vue3',
        })
      }, 2000)
    })
  },
})
</script>

<style scoped>
</style>
