<template>
  <div>
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <!-- slot -->
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="error">{{ error }}</p>
    <p>{{ form.rules[prop] }}</p>
  </div>
</template>

<script>
import Validator from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  data() {
    return {
      error: '',
    }
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const validator = new Validator({ [this.prop]: rules })
      validator.validate({ [this.prop]: value }, (errors) => {
        // 处理校验结果
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>