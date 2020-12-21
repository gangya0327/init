<template>
  <fieldset>
    <legend>今天的温度是</legend>
    <slot></slot>
    <h2>单位：{{msg}}</h2>
  </fieldset>
</template>

<script>
export default {
  name: 'fieldset',
  data() {
    return {
      msg: '摄氏度',
    }
  },
  props: {
    temperature: {
      type: Number,
      default: () => {
        return 23.5
      },
    },
  },
}
</script>