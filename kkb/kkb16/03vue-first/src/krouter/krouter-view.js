export default {
  render(h) {
    // 获取path对应的component
    // let component
    // this.$router.$options.routes.forEach(route => {
    //   if (route.path === this.$router.current) {
    //     component = route.component
    //   }
    // })
    const { routeMap, current } = this.$router
    const component = routeMap[current].component || null
    return h(component)
  }
}