<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: '',
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      const values = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: values }, (error) => {
        if (error) {
          this.error = error[0].message
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