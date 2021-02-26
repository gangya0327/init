<template>
  <div>
    <k-form :model="userinfo" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input placeholder="请输入用户名" v-model="userinfo.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input placeholder="请输入密码" type="password" v-model="userinfo.password"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="login">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      userinfo: {
        username: 'peter',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
      },
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          console.log('submit success')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>