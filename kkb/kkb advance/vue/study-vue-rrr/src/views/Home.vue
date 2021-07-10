<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <course-list :courses="courses"></course-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CourseList from '@/components/CourseList'
import { getCourses } from '@/api/course'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    CourseList,
  },
  data() {
    return {
      courses: [],
    }
  },
  async created() {
    const data = await getCourses()
    this.courses = data
  },
}
</script>
