<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <k-form></k-form>11
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import KForm from '@/components/form/index.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    KForm,
  },
};
</script>
