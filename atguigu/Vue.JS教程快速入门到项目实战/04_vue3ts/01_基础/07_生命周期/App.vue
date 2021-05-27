<template>
  <h2>父组件</h2>
  <button @click="isShow=!isShow">切换</button>
  <Child v-if="isShow"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child from './components/Child.vue'

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true)
    return { isShow }
  },
})
</script>
