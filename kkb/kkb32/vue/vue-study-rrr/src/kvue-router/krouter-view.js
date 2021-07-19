export default {
  render(h) {
    // 标记当前router-view深度
    // console.log(this.$vnode)
    this.$vnode.data.routerView = true

    let depth = 0
    let parent = this.$parent
    console.log(`parent`, this.$parent)
    let count = 0
    while (parent && count < 5) {
      console.log(count)
      count++
      const vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData) {
        if (vnodeData.routerView) {
          // 说明当前parent是一个router-view
          depth++
        }
      }
      parent = this.$parent
    }
    console.log(`depth`, depth)

    // 获取path对应的component
    let component = null;
    // 1. 获取当前url的hash部分
    // console.log(this.$router.current);
    // 2. 根据hash部分从路由表获取对应组件
    // const route = this.$router.$options.routes.find((r) => r.path === this.$router.current);
    // if (route) { component = route.component; }

    // const { routeMap, current } = this.$router
    // component = routeMap[current].component

    const route = this.$router.matched[depth]
    if (route) component = route.component
    return h(component);
  },
}