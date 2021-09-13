<template>
  <div>
    <h2>自定义表单</h2>
    <k-form :model="model" :rules="rules" ref="kForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onSubmit">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from '@/form/KInput.vue';
import KFormItem from '@/form/KFormItem.vue';
import KForm from '@/form/KForm.vue';

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: 'raven',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.kForm.validate((result) => {
        if (result) {
          console.log('ok');
        } else {
          console.log('no');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
