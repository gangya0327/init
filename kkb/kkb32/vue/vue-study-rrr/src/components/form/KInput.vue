<template>
  <div>
    <!-- 双绑：属性，事件 -->
    <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inhreitAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
