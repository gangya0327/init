import Vue from 'vue';
import App from './App.vue';

import Notice from '@/components/Notice.vue';
import create from '@/utils/create';

Vue.config.productionTip = false;

// eslint-disable-next-line func-names
Vue.prototype.$notice = function (props) {
  create(Notice, props);
};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
