<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <!-- 匿名插槽 -->
      <slot></slot>
    </div>
    <div class="footer">
      <slot :fc="footerContent" name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remark: [
        '好好学习',
        '天天向上',
        '加油打工',
        '继续努力',
        '快到周末',
        '新的一天',
        '完美收工',
      ],
    }
  },
  computed: {
    footerContent() {
      return this.remark[new Date().getDay() - 1]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>