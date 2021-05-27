<template>
  <h2>customRef</h2>
  <input type="text" v-model="keyword" />
  <p>{{keyword}}</p>
</template>

<script lang="ts">
import { defineComponent, customRef } from 'vue'

// 自定义防抖hook函数
function useDebouncedRef<T>(value: T, delay = 200) {
  // 存储定时器的变量id
  let timeOutId: number
  return customRef((track, trigger) => ({
    get() {
      track()
      return value
    },
    set(newValue: T) {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        value = newValue
        trigger()
      }, delay)
    },
  }))
}

export default defineComponent({
  setup() {
    // const keyword = ref('abc')
    const keyword = useDebouncedRef('abc', 500)
    return {
      keyword,
    }
  },
})
</script>

<style scoped>
</style>
