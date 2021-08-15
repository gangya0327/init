<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  methods: {
    // 校验所有表单项
    validate(cb) {
      // 获取所有items
      const results = this.$children
        .filter((child) => child.prop)
        .map((child) => child.validate())
      // 统一处理所有Promise
      Promise.all(results)
        .then(() => cb(true))
        .catch(() => cb(false))
    },
  },
}
</script>

<style lang="scss" scoped>
</style>