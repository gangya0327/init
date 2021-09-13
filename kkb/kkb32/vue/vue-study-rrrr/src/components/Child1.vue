<template>
  <div>
    <Child2 v-bind="$attrs" v-on="$listeners">
      <template v-slot:default>匿名插槽</template>
      <template v-slot:content>具名插槽</template>
      <template v-slot:mine="slotProps">
        来自子组件数据：{{slotProps.foo}}
      </template>
    </Child2>
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
