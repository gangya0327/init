<template>
  <div id="app">
    <img src="./assets/logo.png" width="50" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <my-formr></my-formr>
    <my-form></my-form>
    <slots></slots>
    <parent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Parent from './components/communicate/Parent'
import Slots from './components/slot/Slots'
import MyForm from './components/form/MyForm'
import MyFormr from './components/formr'

export default {
  name: 'App',
  components: {
    Parent,
    Slots,
    MyForm,
    MyFormr
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
