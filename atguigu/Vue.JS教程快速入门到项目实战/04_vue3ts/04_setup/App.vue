<template>
  <h2>App父组件</h2>
  <h3>msg: {{msg}}</h3>
  <button @click="msg+='-'">更新数据</button>
  <Child :msg="msg" @xxx="xxx" msg1="hiii"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child from './components/Child.vue'

export default defineComponent({
  name: 'App',
  components: { Child },
  setup() {
    const msg = ref('hello')
    function xxx(txt: string) {
      msg.value = txt
    }
    return {
      msg,
      xxx,
    }
  },
})
</script>
