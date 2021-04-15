import Vue from 'vue'
import App from './App.vue'

const hero = {
  firstName: 'Florence',
  inventorOf: ['coxcomb chart', 'modern nursing'],
}

Vue.config.productionTip = false
console.log('241')
new Vue({
  render(h) { return h(App) },
}).$mount('#app')
