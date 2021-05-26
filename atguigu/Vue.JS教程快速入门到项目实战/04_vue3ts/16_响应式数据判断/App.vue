<template>
  <h2>响应式数据判断</h2>
</template>

<script lang="ts">
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref,
} from 'vue'

export default defineComponent({
  setup() {
    console.log('判断isRef对象', isRef(ref({})))
    console.log('判断isReactive对象', isReactive(reactive({})))
    console.log('判断readonly', isReadonly(readonly({})))
    console.log('判断是否由reactive或readonly创建的代理', isProxy(readonly({})))
    console.log('判断是否由reactive或readonly创建的代理', isProxy(reactive({})))
    return {}
  },
})
</script>

<style scoped>
</style>
