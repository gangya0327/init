<template>
  <h2>toRefs的使用</h2>
  <h3>name: {{name}}</h3>
  <h3>age: {{age}}</h3>

  <h3>name3: {{name3}}</h3>
  <h3>age3: {{age3}}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

function useFeature() {
  const state3 = reactive({
    name3: 'peter',
    age3: 20,
  })
  return {
    ...toRefs(state3)
  }
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'peter',
      age: 20,
    })
    // toRefs可以把一个响应式对象转换成普通对象，对象的每个属性都是ref
    const state2 = toRefs(state)
    setInterval(() => {
      // state.age++
      state2.age.value++
    }, 2000)
    const { name3, age3 } = useFeature()
    return {
      // ...state, // 不是响应式 =》{name:'peter', age: 20}
      ...state2,
      name3,
      age3
    }
  },
})
</script>

<style scoped>
</style>
