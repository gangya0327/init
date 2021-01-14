import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'

// import router from './router'
// import router from './krouter'
import router from './xrouter'

// import store from './kstore'
import store from './xstore'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// Vue.prototype.$create = create
Vue.use(create)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
