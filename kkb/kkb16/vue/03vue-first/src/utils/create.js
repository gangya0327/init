import Vue from 'vue'
import Notice from '@/components/notice/Notice'

function create(Component, props) {
  // 组件构造函数获取
  // Vue.extend()
  // render
  const vm = new Vue({
    // hs createElement，返回VNode，虚拟dom
    // 需要挂在才能变成真实
    render: h => h(Component, { props })
  }).$mount() // 不指定宿主元素，则会创建真实dom，但不会追加操作

  // 获取真实dom
  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]

  // 删除
  comp.remove = function() {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default {
  install(Vue) {
    Vue.prototype.$notice = function(options) {
      return create(Notice, options)
    }
  }
}