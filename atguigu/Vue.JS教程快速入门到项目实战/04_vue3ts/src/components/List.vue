<template>
  <ul class="todo-main">
    <Item
      :deleteTodo="deleteTodo"
      :index="index"
      :key="index"
      :todo="item"
      :updateTodo="updateTodo"
      v-for="(item, index) in todos"
    ></Item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  components: {
    Item,
  },
  props: {
    todos: {
      type: Array,
      default: null,
    },
    deleteTodo: {
      type: Function,
      default: null,
    },
    updateTodo: {
      type: Function,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
