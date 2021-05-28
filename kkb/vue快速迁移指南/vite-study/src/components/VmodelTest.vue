<template>
  <div @click="$emit('update:modelValue', modelValue+1)">count: {{modelValue}}</div>
</template>

<script>
export default {
  name: 'VmodelTest',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  }
}
</script>
