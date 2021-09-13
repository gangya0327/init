<template>
  <div>
    <h2>child2</h2>
    <h3>属性透传</h3>
    <div @click="$emit('appEvent')">{{ msg }}</div>
    <h3>provide</h3>
    <div>appMsg: {{ appMsg }}</div>
    <div>bar: {{ bar }}</div>

    <h2>插槽</h2>
    <slot></slot>
    <br />
    <slot name="content"></slot>
    <br />
    <slot name="mine" :foo="foo"></slot>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  inject: {
    appMsg: 'appMsg',
    bar: { from: 'foo' },
  },
  data() {
    return {
      foo: 'foo',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
