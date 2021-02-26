<template>
  <div class="message-box" v-if="show">
    <!-- 具名插槽 -->
    <slot name="title" title="来子message的标题" />
    <slot />
    <span @click="toggle" class="message-box-close">×</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    // this.$bus.$on('message-close', () => {
    //   // this.$emit('update:show', false)
    //   // this.show = false
    //   this.toggle()
    // })
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
</style>