<template>
  <h2>子组件</h2>
  <h3>{{msg}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

export default defineComponent({
  name: 'Child',
  beforeCreate() {
    console.log('2.x中的beforeCreate')
  },
  created() {
    console.log('2.x中的created')
  },
  beforeMount() {
    console.log('2.x中的beforeMount')
  },
  mounted() {
    console.log('2.x中的mounted')
  },
  beforeUpdate() {
    console.log('2.x中的beforeUpdate')
  },
  updated() {
    console.log('2.x中的updated')
  },
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // },
  beforeUnmount() {
    console.log('2.x中的beforeUnmount')
  },
  // destroyed() {
  //   console.log('destroyed')
  // },
  unmounted() {
    console.log('2.x中的unmounted')
  },
  setup() {
    console.log('setup')
    const msg = ref('abc')
    const update = () => {
      msg.value += '---'
    }
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return { msg, update }
  },
})
</script>
