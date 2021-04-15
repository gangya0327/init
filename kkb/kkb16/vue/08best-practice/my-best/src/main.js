import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/icons'

Vue.config.productionTip = false

console.log(`process.env`, process.env)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
