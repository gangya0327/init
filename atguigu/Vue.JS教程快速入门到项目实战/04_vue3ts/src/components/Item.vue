<template>
  <li
    :style="{backgroundColor: bgColor, color: myColor}"
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
  >
    <label>
      <input v-model="isComplete" type="checkbox" />
      <span>{{todo.title}}</span>
    </label>
    <button @click="delTodo" class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { ITodo } from '../types/ITodo'

export default defineComponent({
  props: {
    todo: {
      type: Object as () => ITodo,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const bgColor = ref('white')
    const myColor = ref('black')
    const isShow = ref(false)
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true
      } else {
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }
    const delTodo = () => {
      // eslint-disable-next-line no-alert
      if (window.confirm('确定删除吗')) {
        console.log(props.index)
        props.deleteTodo(props.index)
      }
    }
    const isComplete = computed({
      get() {
        return props.todo.isCompleted
      },
      set(val) {
        props.updateTodo(props.todo, val)
      },
    })
    return {
      bgColor,
      myColor,
      isShow,
      mouseHandler,
      delTodo,
      isComplete,
    }
  },
})
</script>

<style lang='scss' scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  &:before {
    content: initial;
  }
  &:last-child {
    border-bottom: none;
  }
  label {
    float: left;
    cursor: pointer;
    li {
      button {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
      }
    }
  }
  button {
    float: right;
    margin-top: 3px;
  }
}
</style>
