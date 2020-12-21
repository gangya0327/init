<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="openDialog" type="primary">打开弹框</el-button>
    <custom-dialog :dialogVisible.sync="isShow"></custom-dialog>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomDialog from './components/CustomDialog'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomDialog,
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
    },
    // closeDialog() {
    //   this.isShow = false
    // },
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
