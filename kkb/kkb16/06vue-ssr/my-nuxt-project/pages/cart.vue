<template>
  <div>
    <h2>购物列表</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`./detail/${good.id}`">
          <span>{{ good.text }}</span>
          <span>${{ good.price }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      return { goods }
    }
    error({ statusCode: 400, message: '数据查询失败请重试' })
  },
  data() {
    return {
      goods: [
        { id: 1, text: 'JavaScript高级教程', price: 198 },
        { id: 2, text: '技术人修炼之道', price: 68 },
      ],
    }
  },
  head() {
    return {
      title: '课程列表',
      // vue-meta利用hid确定要更新meta
      meta: [
        { name: 'description', hid: 'description', content: 'set page meta' },
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
