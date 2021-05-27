<template>
  <div class="todo-header">
    <input placeholder="请输入任务名称" type="text" v-model="title" @keydown.enter="add"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref('')
    const add = () => {
      const text = title.value
      if (!text.trim()) return
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      }
      console.log('todo', todo)
      props.addTodo(todo)
      title.value = ''
    }
    return { title, add }
  },
})
</script>

<style lang="scss" scoped>
.todo-header {
  input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    &:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
  }
}
</style>
