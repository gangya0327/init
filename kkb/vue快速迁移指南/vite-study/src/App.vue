<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ModalButton></ModalButton>
  <Emits @click="clickMe"></Emits>
  <!-- 实例方法定义组件 -->
  <comp></comp>

  <vmodel-test v-model="modelValue"></vmodel-test>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalButton from './components/ModalButton.vue'
import Emits from './components/Emits.vue'
import VmodelTest from './components/VmodelTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModalButton,
    Emits,
    VmodelTest,
  },
  data() {
    return {
      modelValue: 1
    }
  },
  methods: {
    clickMe() {
      console.log('click me')
    },
  },
}
</script>
