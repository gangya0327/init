<template>
  <div>
    <div v-if="courses.length===0">暂无课程</div>
    <div :class="['course-list', $style.red]" v-else>
      <div
        :class="{[$style.active]: selectedCourse===c}"
        :key="c.name+1"
        @click="selectedCourse=c"
        v-for="c in courses"
      >
        <router-link :to="`/course/${c.name}`">{{c.name}} - {{c.price | currency('£')}}</router-link>|
        <router-link :to="`/admin/course/${c.name}`">{{c.name}} - {{c.price | currency('£')}}</router-link>
      </div>
      <hr />
      <div
        :class="{[$style.active]: selectedCourse===c}"
        :key="c.name+2"
        @click="onClick(c)"
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
  methods: {
    onClick(c) {
      this.selectedCourse = c
      // this.$router.push(`/admin/course/${c.name}`)
      this.$router.push({ name: 'detail', params: { name: c.name } })
    },
  },
}
</script>

<style module>
.active {
  background-color: #ddd;
}
.red {
  color: red;
}
</style>