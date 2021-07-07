<template>
  <!-- 条件渲染 -->
  <p v-if="courses.length === 0">没有任何课程信息</p>
  <!-- 列表渲染 -->
  <div class="course-list" v-else>
    <div
      v-for="c in courses"
      :key="c.name"
      :class="{ active: selectedCourse === c }"
      @click="selectedCourse = c"
    >
      {{ c.name }}: {{ c.price | currency('$') }}
    </div>
    <!-- <hr />
    <div
      v-for="c in courses"
      :key="c.name"
      :style="{backgroundColor: selectedCourse===c ? '#ddd' : ''}"
      @click="selectedCourse=c"
    >
      {{c.name}}: ￥{{c.price}}
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => [],
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

<style scoped>
.active {
  background-color: #ddd;
}
</style>