import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/course/:name',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 判断路由是否需要守卫
  // if (to.meta.auth) {
  //   if (window.isLogin) {
  //     next()
  //   } else {
  //     next('/login?redirect=' + to.fullPath)
  //   }
  // } else {
  //   next()
  // }
  if (window.isLogin) {
    // 已经登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有登录
    if (to.path === '/login') {
      next()
    } else {
      next('/login?redirect=' + to.fullPath)
    }
  }
})

export default router
