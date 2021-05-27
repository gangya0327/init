<template>
  <h2>suspense</h2>
  <suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <async-component></async-component> -->
      <async-address></async-address>
    </template>
    <template v-slot:fallback>
      <h3>loading</h3>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import AsyncAddress from './components/AsyncAddress.vue'

// 静态引入
// import AsyncComponent from './components/AsyncComponent.vue'
// 动态引入（vue2可行，在vue3中不可行）
// const AsyncComponent = () => import('./components/AsyncComponent.vue')
// const AsyncComponent = defineAsyncComponent(
//   () => import('./components/AsyncComponent.vue')
// )

export default defineComponent({
  components: {
    AsyncAddress,
    // AsyncComponent,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>
