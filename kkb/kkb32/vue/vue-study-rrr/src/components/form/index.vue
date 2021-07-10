<template>
  <div>
    <k-input v-model="model.username" placeholder='请输入内容'></k-input>
    {{ model }}
  </div>
</template>

<script>
import KInput from './KInput.vue';

export default {
  components: {
    KInput,
  },
  data() {
    return {
      model: { username: '123' },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
