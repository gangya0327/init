<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1: {{m1}}</h3>
  <h3>m2: {{m2}}</h3>
  <h3>m3: {{m3}}</h3>
  <h3>m4: {{m4}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref, shallowReactive, shallowRef
} from 'vue'

export default defineComponent({
  setup() {
    const m1 = reactive({
      name: 'peter',
      pets: [
        { name: 'dog', color: 'black' },
      ]
    })
    const m2 = shallowReactive({
      name: 'peter',
      pets: [
        { name: 'dog', color: 'black' },
      ]
    })
    const m3 = ref({
      name: 'peter',
      pets: [
        { name: 'cat', color: 'white' }
      ]
    })
    const m4 = shallowRef({
      name: 'peter',
      pets: [
        { name: 'cat', color: 'white' }
      ]
    })
    const update = () => {
      // m1.name += '123'
      // m1.pets[0].color = 'blue'
      // m2.name += '123'
      // m2.pets[0].color = 'blue' // 不能改变
      // m3.value.name += '123'
      // m3.value.pets[0].color = 'blue'
      // m4.value.name += '123' // 不能改变
      // m4.value.pets[0].color = 'blue' // 不能改变
    }
    return {
      m1, m2, m3, m4, update
    }
  }
})
</script>

<style scoped>

</style>
