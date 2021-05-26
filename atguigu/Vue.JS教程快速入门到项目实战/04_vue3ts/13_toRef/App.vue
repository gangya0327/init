<template>
  <h2>toRef</h2>
  <h3>state: {{state}}</h3>
  <h3>age: {{age}}</h3>
  <h3>money: {{money}}</h3>
  <button @click="update">更新数据</button>
  <Child :age='age'></Child>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRef, ref
} from 'vue'
import Child from './components/Child.vue'

export default defineComponent({
  components: {
    Child
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 199
    })
    // toRef把响应式对象的某个属性变成ref对象
    const age = toRef(state, 'age')
    const money = ref(state.money)
    const update = () => {
      console.log('test')
      state.age += 2
      // age.value += 3
      // money.value += 4
    }
    return {
      state,
      age,
      money,
      update
    }
  }
})
</script>

<style scoped>

</style>
