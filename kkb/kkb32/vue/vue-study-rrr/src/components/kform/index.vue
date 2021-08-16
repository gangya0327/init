<template>
  <div>
    <k-form :model="model" :rules="rules" ref="myForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submit">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from '@/components/kform/KInput.vue'
import KFormItem from '@/components/kform/KFormItem.vue'
import KForm from '@/components/kform/KForm.vue'
export default {
  components: { KInput, KFormItem, KForm },
  data() {
    return {
      model: {
        username: 'peter',
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名为必填项',
          },
        ],
      },
    }
  },
  methods: {
    submit() {
      this.$refs.myForm.validate((valid) => {
        this.$notice({
          title: '社会你杨哥喊你来搬砖',
          message: valid ? '请求登录!' : '校验失败!',
          duration: 1000,
        })
        if (valid) {
          console.log('success')
        } else {
          console.error('校验失败')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>