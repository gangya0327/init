// 客户端也需要创建vue实例
const { createApp } = require("./main");

const { app, router, store } = createApp()

// 判断是否存在state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  // 挂载激活
  app.$mount('#app')
})
