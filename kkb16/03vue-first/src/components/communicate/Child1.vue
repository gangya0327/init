<template>
  <div>
    <h3>child1</h3>
    <p>{{msg}}</p>
    <button @click="$emit('event-from-child1', 'some msg from child1')">给父级发送消息</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // this.$bus.$on('event-from-child2', (msg) => {
    //   console.log(msg)
    // })
    this.$parent.$on('event-from-child2', (msg) => {
      console.log(msg)
    })
  },
  methods: {
    eat() {
      console.log('回来了')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>