<template>
  <h2>provide和inject</h2>
  <p>当前的颜色: {{color}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='blue'">蓝色</button>
  <hr>
  <Son></Son>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from './components/Son.vue'

export default defineComponent({
  components: {
    Son
  },
  setup() {
    const color = ref('red')
    provide('color', color)
    return {
      color,
    }
  },
})
</script>

<style scoped>
</style>
