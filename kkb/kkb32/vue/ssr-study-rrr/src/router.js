import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(Router)

// 返回一个工厂函数，可以创建路由实例
export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: About
    }]
  })
}