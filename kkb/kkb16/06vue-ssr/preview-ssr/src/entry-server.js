// 调用main.js里的工厂函数创建实例
import { createApp } from './main'

// 该函数会被express路由处理函数调用，用于创建vue实例
export default context => {
  // 返回Promise，确保异步操作都结束
  return new Promise((resolve, reject) => {
    // 获取vue，store，router实例
    const { app, router, store } = createApp(context)
    // 首屏处理
    router.push(context.url)
    // 检测路由就绪事件
    router.onReady(() => {
      // 获取匹配的路由组件数组
      const matchedComponents = router.getMatchedComponents()

      // 若无匹配则抛出异常
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // 遍历所有匹配组件，查看是否有asyncData配置项
      // 如果存在则执行，并解析返回Promise
      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute // 当前路由，可以传递额外路由参数
            })
          }
        })
      ).then(() => {
        // 还要把store状态返回前端
        // 按约定将state设置到context.state属性中
        // 这个字段会被renderer序列化为window.__INITIAL_STATE__
        context.state = store.state
        // 所有请求结果全部返回，可以返回vue实例
        resolve(app)
      }).catch(err => reject({ err }))
    }, reject)
  })
}
