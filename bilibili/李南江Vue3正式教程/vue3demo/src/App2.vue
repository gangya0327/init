<template>
  <div>{{age}}</div>
  <button @click="myFn">按钮</button>
</template>

<script>
import { ref, customRef } from 'vue'

function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        console.log('get', value)
        track()
        return value
      },
      set(newValue) {
        console.log('set', newValue)
        value = newValue
        trigger()
      },
    }
  })
}
export default {
  setup() {
    // const age = ref(18)
    let age = myRef(18)
    function myFn() {
      age.value += 1
    }
    return { age, myFn }
  },
}
</script>
