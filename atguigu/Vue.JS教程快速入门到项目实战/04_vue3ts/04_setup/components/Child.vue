<template>
  <h2>Child子组件</h2>
  <h3>msg: {{msg}}</h3>
  <h3>count: {{count}}</h3>
  <button @click="emitxxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: ['msg'],
  beforeCreate() {
    console.log('beforeCreate')
  },
  /**
   * props对象，包含传入的所有属性
   * context对象，有attrs（获取当前组件标签上的属性），emit（用来分发自定义事件的函数），slots（包含传入的插槽内容）
   */
  setup(props, context) {
  // setup(props, {attrs, slots, emit}) {
    console.log('setup')
    console.log('props', props)
    console.log('props.msg', props.msg)
    console.log('context', context)
    console.log('context.attrs.msg1', context.attrs.msg1)
    function emitxxx() {
      context.emit('xxx', '你好啊')
    }
    return {
      emitxxx,
    }
  },
  data() {
    return {
      count: 10,
    }
  },
})
</script>
