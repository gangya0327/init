<template>
  <h2>父组件</h2>
  <modal-button></modal-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalButton from './components/ModalButton.vue'

export default defineComponent({
  components: {
    ModalButton,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>
