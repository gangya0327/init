// 声明一个函数create
// 将传入组件配置转换为构造函数
// 将创建组件实例手动挂载到body

import Vue from "vue";

export default function create(Component, props) {
  // 1 转换为组件构造函数
  // 1.1 Vue.extend
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({
    propsData: props
  })
  // 1.2 new Vue({render: h=>h(Component)})
  // 2 挂载
  comp.$mount() // 只挂载
  // 挂载后$el填充了
  document.body.appendChild(comp.$el)
  comp.remove = function() {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}