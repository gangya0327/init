#### src/platforms/web/entry-runtime-with-compiler.js

入口文件，覆盖$mount，执行模板解析和编译工作



#### src/platforms/web/runtime/index.js

定义$mount



#### src/core/index.js
定义全局api



#### src/core/instance/index.js

定义构造函数

```javascript
// 给vue添加_init方法
initMixin(Vue)

// $set,$delete,$watch
stateMixin(Vue)

// $emit,$on,$off,$once
eventsMixin(Vue)

// _update(),$forceUpdate,$destroy
lifecycleMixin(Vue)

// _render(),$nextTick
renderMixin(Vue)
```



#### src/core/instance/init.js

定义初始化方法_init

```javascript
// $parent,$root,$children,$refs
initLifecycle(vm)

// 处理父组件传入事件和回调，添加监听
initEvents(vm)

// 声明$slots,$createElement()
initRender(vm)

// 调用beforeCreate钩子
callHook(vm, 'beforeCreate')

// 注入数据
initInjections(vm) // resolve injections before data/props

// 数据初始化，响应式
initState(vm)

// 数据提供
initProvide(vm) // resolve provide after data/props

// 初始化完成！
callHook(vm, 'created')
```



#### 初始化过程

new Vue() => this._init(options) => $mount => mountComponent() => _render() => _update()

调用init，初始化各种属性，调用mountComponent，声明updateComponent，创建Watcher，_render获取虚拟dom，_update把虚拟dom转为真实dom



#### src/core/instance/state.js

initData 获取data，设置代理，启动响应式observe



#### src/core/observer/index.js



#### vue2.0 响应式缺点

1. 递归遍历，性能有影响
2. api不统一，对象数组设值