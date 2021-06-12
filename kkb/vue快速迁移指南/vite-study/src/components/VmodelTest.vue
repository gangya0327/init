<template>
  <div @click="$emit('update:modelValue', modelValue+1)">count: {{modelValue}}</div>
  <!-- <div @click="$emit('update:counter', counter+1)">count: {{counter}}</div> -->
</template>

<script>
export default {
  name: 'VmodelTest',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    counter: {
      type: Number,
      default: 0
    },
  }
}
</script>
