<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <course-list :courses="courses"></course-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CourseList from './components/CourseList.vue'
import { getCourses } from './api/course'

export default {
  name: 'App',
  components: {
    // HelloWorld
    CourseList,
  },
  data() {
    return {
      title: '购物车',
      course: '',
      courses: [],
    }
  },
  async created() {
    // 组件实例已创建，但还未挂载，dom不存在
    const data = await getCourses()
    this.courses = data
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
