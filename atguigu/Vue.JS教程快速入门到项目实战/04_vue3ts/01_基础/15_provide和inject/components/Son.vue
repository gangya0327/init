<template>
  <h2>子组件</h2>
  <hr>
  <GrandSon></GrandSon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GrandSon from './GrandSon.vue'

export default defineComponent({
  components: {
    GrandSon
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
