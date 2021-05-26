<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{state}}</h3>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import {
  defineComponent, toRaw, markRaw, reactive
} from 'vue'

interface UserInfo {
  name: string
  age: number
  likes?: string[]
}

export default defineComponent({
  setup() {
    const state = reactive<UserInfo>({
      name: 'peter',
      age: 23,
    })
    const testToRaw = () => {
      // 把代理对象变成普通对象，数据变化，界面不变
      const user = toRaw(state)
      user.name += '123'
      console.log('123')
    }
    const testMarkRaw = () => {
      // state.likes = ['a', 'b']
      // state.likes[0] += 'ccc'
      const likes = ['a', 'b']
      // markRaw标记的数据，不能再成为响应对象
      state.likes = markRaw(likes)
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += 'c'
          console.log('c')
        }
      }, 1000)
    }
    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  },
})
</script>

<style scoped>
</style>
