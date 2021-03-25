<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    route
    return store.dispatch('getCount')
  },
}
</script>