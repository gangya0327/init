// 1. 声明一个函数
// 2. 将传入组件配置转换为构造函数
// 3. 将创建组件实例手动挂载到body

import Vue from 'vue';

export default function create(Component, props) {
  // 1.1 Vue.extend(Comp)
  const Ctor = Vue.extend(Component);
  const comp = new Ctor({
    propsData: props,
  });
  // 1.2 new Vue({render: h=> h(Comp)})

  // 2 挂载
  comp.$mount();
  document.body.appendChild(comp.$el);
  // eslint-disable-next-line func-names
  comp.remove = function () {
    document.body.removeChild(comp.$el);
    comp.$destroy();
  };
  return comp;
}
