<template>
  <h2 :style="{color: color}">孙组件</h2>
  <p>{{color}}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const color = inject('color')
    return { color }
  }
})
</script>

<style scoped>

</style>
