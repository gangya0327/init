<template>
  <div>
    <!-- $listeners会被展开并监听 -->
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
    <p>{{$attrs.msg}}</p>
    <p>{{foo1}}</p>
  </div>
</template>

<script>
export default {
  inject: {
    foo1: {
      from: 'foo',
      type: String,
      default: '',
    },
  },
  methods: {
    sendToChild1() {
      // this.$bus.$emit('event-from-child2', 'some msg from child2')
      this.$parent.$emit('event-from-child2', 'some msg from child2')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>