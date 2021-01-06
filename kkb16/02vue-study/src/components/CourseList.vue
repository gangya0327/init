<template>
  <div>
    <div v-if="courses.length===0">暂无课程</div>
    <div v-else>
      <div
        :class="{active: selectedCourse===c?'active':''}"
        :key="c.name"
        @click="selectedCourse=c"
        v-for="c in courses"
      >{{c.name}} - {{c.price | currency('£')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      selectedCourse: '',
    }
  },
  filters: {
    currency(value, symbol = '￥') {
      return symbol + ' ' + value
    },
  },
}
</script>

<style lang="scss" scoped>
</style>