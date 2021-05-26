<template>
  <h2>setup和ref的基本使用</h2>
  <div>{{count}}</div>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // ref用来定义基本类型数据
    let count = ref(0)
    function updateCount() {
      console.log('update')
      count.value++
    }
    return {
      count,
      updateCount,
    }
  },
})
</script>