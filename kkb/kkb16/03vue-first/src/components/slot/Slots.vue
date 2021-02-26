<template>
  <div>
    <h2>插槽</h2>
    <layout>
      <template v-slot:header>开课吧全栈</template>
      content...
      <!-- <template v-slot:footer="{fc}">{{fc}}</template> -->
      <template v-slot:footer="ctx">{{ctx.fc}}</template>
    </layout>
  </div>
</template>

<script>
import Layout from './Layout'
export default {
  components: {
    Layout,
  },
}
</script>

<style lang="scss" scoped>
</style>