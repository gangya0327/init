import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import router from './kvue-router';
import router from './kvue-router2';
// import store from './store';
import store from './kstore';
// import store from './kstore2';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
