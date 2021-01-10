<template>
  <div>
    <h2>组件通信</h2>
    <child1 @event-from-child1="eventFromChild" msg="some msg from parent"></child1>
    <child2 @click="onClick" msg="some msg from parent"></child2>
    <br />
    <button @click="goHome">回家吃饭</button>
  </div>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'
export default {
  provide() {
    return {
      foo: 'foooo',
    }
  },
  components: {
    Child1,
    Child2,
  },
  methods: {
    eventFromChild(msg) {
      console.log(msg)
    },
    goHome() {
      this.$children[0].eat()
    },
    onClick() {
      console.log('来自父级的点击')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>