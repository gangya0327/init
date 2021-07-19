import Vue from 'vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Article from '@/views/Article.vue';
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
    children: [
      {
        path: '/about/info',
        component: {
          render(h) {
            return h('div', 'info page')
          }
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
