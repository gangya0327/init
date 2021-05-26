<template>
  <button @click="modalOpen=true">打开对话框</button>
  <teleport to="body">
    <div v-if="modalOpen">
      <h3>我是一个对话框</h3>
      <button @click="modalOpen=false">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const modalOpen = ref(false)
    return { modalOpen }
  },
})
</script>

<style scoped>
</style>
