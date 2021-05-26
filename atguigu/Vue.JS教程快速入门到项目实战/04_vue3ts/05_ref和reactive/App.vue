<template>
  <h2>reactive和ref</h2>
  <h3>m1: {{m1}}</h3>
  <h3>m2: {{m2}}</h3>
  <h3>m3: {{m3}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const m1 = ref('abc')
    const m2 = reactive({
      name: 'peter',
      scool: {
        name: 'zucc',
      },
    })
    const m3 = ref({
      name: 'peter',
      scool: {
        name: 'zucc',
      },
    })
    const update = () => {
      m1.value += '---'
      m2.name += '~~~'
      m3.value.scool.name += '==='
    }
    return {
      m1,
      m2,
      m3,
      update,
    }
  },
})
</script>
