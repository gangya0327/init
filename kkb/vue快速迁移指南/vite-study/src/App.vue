<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ModalButton></ModalButton>
  <Emits @click="clickMe"></Emits>
  <!-- 实例方法定义组件 -->
  <comp></comp>

  <vmodel-test v-model="counter"></vmodel-test>
  <!-- 等价于 -->
  <vmodel-test :counter="counter" @update:counter="counter=$event"></vmodel-test>

  <render-test v-model="counter">
    <template v-slot>title</template>
    <template v-slot:content>content...</template>
  </render-test>
  <render-test :counter="counter" @update:counter="counter=$event">
    <template v-slot>title</template>
    <template v-slot:content>content...</template>
  </render-test>

  <!-- 函数式组件 -->
  <functional level="3" style="color: blue">我是一个函数式组件</functional>

  <!-- 异步组件 -->
  <async-comp></async-comp>

  <!-- 自定义指令 -->
  <p v-highlight="'green'">highlight the text</p>

  <!-- 动画效果 -->
  <transition-test></transition-test>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalButton from './components/ModalButton.vue'
import Emits from './components/Emits.vue'
import VmodelTest from './components/VmodelTest.vue'
import Functional from './components/Functional.vue'
import TransitionTest from './components/TransitionTest.vue'
import { h, defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModalButton,
    Emits,
    VmodelTest,
    RenderTest: {
      props: {
        counter: {
          type: Number,
          default: 0,
        },
      },
      render() {
        return h('div', [
          h(
            'div',
            {
              onClick: this.myClick,
            },
            [
              `I am RenderTest ${this.counter}`,
              this.$slots.default(),
              this.$slots.content(),
            ]
          ),
        ])
      },
    },
    Functional,
    AsyncComp: defineAsyncComponent(()=> import('./components/NextPage.vue')),
    TransitionTest
  },
  data() {
    return {
      counter: 1,
    }
  },
  methods: {
    clickMe() {
      console.log('click me')
    },
    myClick() {
      this.$emit('update:counter', this.counter + 1)
    },
  },
}
</script>
