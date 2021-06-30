<template>
  <form>
    <input type="text" v-model="state2.stu.id" />
    <input type="text" v-model="state2.stu.name" />
    <input type="text" v-model="state2.stu.age" />
    <input @click="addStu" type="submit" />
  </form>
  <ul>
    <li
      :key="stu.id"
      @click="removeStu(index)"
      v-for="(stu, index) in state.stus"
    >{{stu.name}}-{{stu.age}}</li>
  </ul>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'app',
  setup() {
    console.log(`this`, this)
    let { state, removeStu } = useRemoveStudent()
    let { state2, addStu } = useAddStudent(state)
    return { state, removeStu, state2, addStu }
  },
}

function useAddStudent(state) {
  let state2 = reactive({
    stu: {
      id: '',
      name: '',
      age: '',
    },
  })
  function addStu(e) {
    e.preventDefault()
    const stu = Object.assign({}, state2.stu)
    state.stus.push(stu)
  }
  return { state2, addStu }
}

function useRemoveStudent() {
  let state = reactive({
    stus: [
      { id: 1, name: 'peter', age: 20 },
      { id: 2, name: 'jack', age: 22 },
      { id: 3, name: 'kevin', age: 23 },
    ],
  })
  function removeStu(index) {
    this.state.stus = this.state.stus.filter((stu, idx) => idx !== index)
  }
  return { state, removeStu }
}
</script>