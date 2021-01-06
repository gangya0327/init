<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <course-list :courses="courses"></course-list>
  </div>
</template>

<script>
import CourseList from './components/CourseList'
import { getCourses } from './api/course'

export default {
  name: 'App',
  components: {
    CourseList,
  },
  data() {
    return {
      courses: [],
      price: 12.4,
    }
  },
  async created() {
    const courses = await getCourses()
    this.courses = courses
    // 批量更新商品价格
    this.batchUpdate()
  },
  methods: {
    batchUpdate() {
      this.courses.map((item) => {
        // item.price = this.price
        // this.$set(item, 'price', this.price)
        this.$set(item, 'price', this.price)
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
