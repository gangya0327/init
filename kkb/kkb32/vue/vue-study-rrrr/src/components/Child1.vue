<template>
  <div>
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from '@/components/Child2.vue';

export default {
  components: { Child2 },
};
</script>

<style lang="scss" scoped>
</style>
