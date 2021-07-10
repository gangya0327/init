<template>
  <div class="about">
    <h1>This is an about page</h1>

    <course-list :courses="courses"></course-list>

    <router-view></router-view>
  </div>
</template>

<script>
import CourseList from '@/components/CourseList'
import { getCourses } from '@/api/course'

export default {
  name: 'admin',
  components: {
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
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>
