<template>
  <div>
    <!-- 双绑 -->
    <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 继承特性
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)

      // 通知校验
      this.$parent.$emit('validate')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>