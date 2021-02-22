<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{counter}}
    <input @keyup.enter="addTodo" type="text" v-model="val" />
    <ul>
      <li :key="todo.id" v-for="todo in todos">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// treeshaking 没有用到computed，代码build时会删除vue3里的computed代码
// 方便组合，逻辑都是函数，组合优于继承
// 渐进式更新 ref api
import { reactive, ref, toRefs } from 'vue'

import {x,double} from './useMouse'

// 数据流清晰
import useCounter from './useCounter'
let { counter, addCounter } = useCounter()

let 

let val = ref('')
let todos = reactive([
  { id: 1, title: '123', done: false },
  { id: 2, title: '456', done: false },
])
function addTodo() {
  this.todos.push({
    id: this.todos.length,
    title: this.val,
    done: false,
  })
  this.val = ''
}
return { val, todos, addTodo }
// export default {
// name: 'App',
// components: {
//   // HelloWorld
// },
// data() {
//   return {
//     val: '',
//     todos: [
//       { id: 1, title: '123', done: false },
//       { id: 2, title: '456', done: false },
//     ],
//   }
// },
// // 隐患：命名冲突
// // mixins:['counter', 'mouse'],
// methods: {
//   addTodo() {
//     this.todos.push({
//       id: this.todos.length,
//       title: this.val,
//       done: false,
//     })
//     this.val = ''
//   },
// },
// }
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
