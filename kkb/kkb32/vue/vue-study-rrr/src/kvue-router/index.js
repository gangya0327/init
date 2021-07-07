import Vue from 'vue';
import VueRouter from './kvue-router';
import Home from '../views/Home.vue';

// Vue插件
// 1 函数fn
// 2 object.install
Vue.use(VueRouter);

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({ routers });

export default router;
