<template>
  <h2>reactive的基本使用</h2>
  <div>{{user}}</div>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 返回的是一个Proxy代理
    const obj = {
      name: 'peter',
      age: 20,
      info: {
        nickName: 'raven',
        keys: ['rrr', 'aaa', 'vvv'],
        level: 9,
      },
    }
    const user = reactive(obj)
    console.log(user)
    function updateCount() {
      user.age = 29
      user.info.level = 8
      obj.age = 13
      user.info.keys[2] = 'nnn'
      user.info.keys.push('eee')
    }
    return {
      user,
      updateCount,
    }
  },
})
</script>
