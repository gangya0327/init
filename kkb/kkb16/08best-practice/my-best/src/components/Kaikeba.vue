<template>
  <div>
    <div id="message">{{message}}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'vue-test',
    }
  },
  created() {
    this.message = '开课吧'
  },
  methods: {
    change() {
      this.message = '改变了'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>