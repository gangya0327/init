const isObject = val => val != null && typeof val === 'object'

const toProxy = new WeakMap() // {obj: observed}
const toRaw = new WeakMap() // {observed: obj}

function reactive(obj) {
  if (!isObject(obj)) {
    return obj
  }
  // 查找缓存
  if (toProxy.has(obj)) {
    return toProxy.get(obj)
  }
  if (toRaw.has(obj)) {
    return obj
  }
  // Proxy外层拦截
  const observed = new Proxy(obj, {
    // target是当前代理目标
    get(target, key, receiver) {
      // Reflect是把Object上面的方法转移到这里，避免异常
      const res = Reflect.get(target, key, receiver)
      console.log('获取' + key + ": " + res)
      // 收集依赖
      track(target, key)
      return isObject(res) ? reactive(res) : res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      console.log('设置' + key + ': ' + value)
      trigger(target, key)
      return res
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key)
      console.log('删除' + key)
      return res
    }
  })
  // 缓存
  toProxy.set(obj, observed)
  toRaw.set(observed, obj)
  return observed
}

// 保存响应函数
const effectStack = []
function effect(fn) {
  const rxEffect = function() {
    try {
      effectStack.push(rxEffect)
      // 执行函数触发getter
      return fn()
    } catch (error) {
    } finally {
      effectStack.pop()
    }
  }
  rxEffect()
  return rxEffect
}

// 建立target/key和cb之间的映射关系
let targetMap = new WeakMap()
function track(target, key) {
  // 取出响应函数
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    // 获取依赖表
    let depsMap = targetMap.get(target)

    if (!depsMap) {
      // 初始化时不存在，需要创建一个新的空的map
      depsMap = new Map()
      targetMap.set(target, depsMap)
    }
    // 获取key对应的函数集合
    let deps = depsMap.get(key)
    if (!deps) {
      deps = new Set()
      depsMap.set(key, deps)
    }
    // 把当前effect加入deps中
    if (!deps.has(effect)) {
      deps.add(effect)
    }
  }
}

function trigger(target, key) {
  // 获取依赖set
  const depsMap = targetMap.get(target)
  if (depsMap) {
    const deps = depsMap.get(key)
    deps && deps.forEach(effect => effect())
  }
}

const state = reactive({
  foo: 'foo',
  bar: { a: 1 },
  arr: [1, 2, 3]
})

effect(() => {
  console.log('effect: ' + state.foo)
})

// state.foo
state.foo = 'fooooo'
// state.dong = 'dong'
// delete state.dong

// state.bar.a = 10
// state.arr[0] = 9

// console.log(reactive(state) === state)