<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <h3>KForm</h3>
    <k-form></k-form>

    <h3>MyKForm</h3>
    <my-k-form></my-k-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import KForm from '@/components/form/index.vue'
import MyKForm from '@/components/kform/index.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    KForm,
    MyKForm,
  },
}
</script>
