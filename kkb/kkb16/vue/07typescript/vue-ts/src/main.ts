import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './test-ts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
