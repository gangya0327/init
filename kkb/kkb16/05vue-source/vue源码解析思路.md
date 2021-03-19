#### src/platforms/web/entry-runtime-with-compiler.js

入口文件，覆盖$mount，执行模板解析和编译工作



#### src/platforms/web/runtime/index.js

定义$mount



#### src/core/index.js
定义全局api



#### src/core/instance/index.js

定义构造函数

定义实例方法

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
// 创建的顺序自上而下，挂载的顺序自下而上
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



#### 异步队列

异步：只要侦听到数据变化，vue将开启一个队列，并缓存在同一事件循环中发生的所有数据变更

批量：如果同一个watcher被多次触发，只会被推入到队列中一次，去重对于避免不必要的计算和dom操作非常重要，然后在下一个事件循环tick中，vue刷新队列执行

异步策略：使用`Promse.then`，`Mutationobserver`和`setImmediate`，如果环境不支持，则采用`setTimeout`代替



#### src/platforms/web/runtime/modules/index.js

watcher.run()=>componentUpdate()=>render()=>update()=>patch()



#### patch实现 /src/core/vdom/patch.js

先进行树级比较

- new VNode不存在就删除
- old VNode不存在就新增
- 都存在就执行diff执行更新



#### patchVnode

比较两个VNode：属性更新，文本更新，子节点更新

1. 新老节点都有children子节点，则对子节点进行diff操作，调用updateChildren
2. 老节点没有子节点而新节点有节点，则先清空老节点的文本内容，然后为其新增子节点
3. 新节点没有子节点而老节点有子节点，则移除该节点的所有子节点
4. 新老节点都没有子节点，只是做文本替换



#### updateChildren 重排算法

