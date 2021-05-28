<template>
  <piechart :data="state.data" :r="200" :x="200" :y="200" @click="handleClick"></piechart>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      data: [
        { name: '大学', count: 201, color: 'brown' },
        { name: '本科', count: 672, color: 'yellow' },
        { name: '硕士', count: 284, color: 'pink' },
        { name: '博士', count: 23, color: 'lightblue' },
      ],
    })
    function handleClick() {
      state.data.push({ name: '其他', count: 109, color: 'orange' })
    }
    return {
      state,
      handleClick,
    }
  },
}
</script>