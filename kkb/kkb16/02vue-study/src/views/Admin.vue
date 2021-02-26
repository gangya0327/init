<template>
  <div>
    hello {{message}}
    <!-- <h2 v-bind="title">{{title}}</h2> -->
    <message :show.sync="showWarning" class="warning" ref="msgWarning">
      <template v-slot:default>
        <strong>请输入课程名称</strong>
      </template>
    </message>

    <!-- <message :show="show" @close="show=$event">新增课程成功</message> -->
    <message :show.sync="show" class="success" ref="msgSuccess">
      <template v-slot:title="slotProps">
        <strong>恭喜 {{slotProps.title}}</strong>
      </template>
      <template v-slot:default>{{title}} 新增课程成功</template>
    </message>

    <div>课程数：{{total}}</div>
    <div>课程数：{{totalCount}}</div>

    <course-list :courses="courses"></course-list>

    <router-view></router-view>
  </div>
</template>

<script>
import CourseList from '../components/CourseList'
import Message from '../components/Message'
import { getCourses } from '../api/course'

export default {
  name: 'admin',
  components: {
    CourseList,
    Message,
  },
  data() {
    return {
      message: 'vuejs',
      title: '开课吧',
      courses: [],
      course: '',
      totalCount: '',
      show: false,
      showWarning: false,
      price: 0,
    }
  },
  computed: {
    total() {
      return this.courses.length + '门'
    },
  },
  watch: {
    courses: {
      immediate: true,
      handler(newValue) {
        this.totalCount = newValue.length + '门'
      },
    },
  },
  async created() {
    const courses = await getCourses()
    this.courses = courses
    // 批量更新商品价格
    this.batchUpdate()
  },
  methods: {
    addCourse() {
      // 显示提示信息
      if (this.course) {
        this.courses.push(this.course)
        this.course = ''
        // this.show = true
        this.refs.msgSuccess.toggle()
      } else {
        // this.showWarning = true
        this.refs.msgWarning.toggle()
      }
    },
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

<style module>
.active {
  background-color: #ddd;
}
.red {
  color: red;
}
</style>