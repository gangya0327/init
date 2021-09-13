<template>
  <div>
    <h2>child2</h2>
    <h3>属性透传</h3>
    <div @click="$emit('appEvent')">{{ msg }}</div>
    <h3>provide</h3>
    <div>appMsg: {{ appMsg }}</div>
    <div>bar: {{ bar }}</div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  inject: {
    appMsg: 'appMsg',
    bar: { from: 'foo' },
  },
};
</script>

<style lang="scss" scoped>
</style>
