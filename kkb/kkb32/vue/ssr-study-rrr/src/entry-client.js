// 用于客户端激活

import createApp from './main'

const { app, router } = createApp()
router.onReady(() => {
  app.$mount('#app')
})