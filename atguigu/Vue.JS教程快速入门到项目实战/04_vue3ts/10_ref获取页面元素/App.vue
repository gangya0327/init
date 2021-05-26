<template>
  <h2>ref的另一个作用，获取页面元素</h2>
  <input ref="inputRef" type="text" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    // 初始为空
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => inputRef.value && inputRef.value.focus())
    return { inputRef }
  },
})
</script>

<style scoped>
</style>
