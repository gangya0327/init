<template>
  <div>
    <input
      :value="value"
      @input="onInput"
      ref="input"
      type="text"
      v-on:keydown.enter="addCourse"
    />
    <button @click="addCourse">新增</button>
  </div>
</template>

<script>
export default {
  props: ['value'],

  methods: {
    addCourse() {
      this.$emit('add-course')
    },
    onInput(e) {
      this.$emit('input', e.target.value)
    },
  },
  mounted() {
    // this.$refs.input.focus()
  },
}
</script>

<style lang="scss" scoped>
</style>