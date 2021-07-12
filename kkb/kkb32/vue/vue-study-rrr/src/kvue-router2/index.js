import Vue from 'vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import VueRouter from './kvue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
