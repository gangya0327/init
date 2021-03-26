<template>
  <div class="container">
    <h2 v-if="error.statusCode === 404">页面不存在</h2>
    <h2 v-else>应用发生错误</h2>
    <p>{{ error }}</p>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
