<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
// @ is an alias to /src
import Parent from '@/components/communicate/Parent'
import Slots from '@/components/slot/Slots'
import MyForm from '@/components/form/MyForm'
import MyFormr from '@/components/formr'

export default {
  name: 'Home',
  components: {
    Parent,
    Slots,
    MyForm,
    MyFormr,
  },
}
</script>
