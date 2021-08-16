import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import router from './kvue-router';
import router from './kvue-router2';
// import store from './store';
import store from './kstore';
// import store from './kstore2';

import Notice from '@/components/Notice'
import create from '@/utils/create'

Vue.config.productionTip = false;

Vue.prototype.$notice = function(props) {
  const notice = create(Notice, props)
  notice.show()
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
