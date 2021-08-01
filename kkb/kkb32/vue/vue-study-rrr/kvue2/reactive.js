// 数组响应式
const originalProto = Array.prototype
const arrayProto = Object.create(originalProto);
['push', 'pop', 'shift', 'unshift'].forEach(method => {
  arrayProto[method] = function() {
    originalProto[method].apply(this, arguments)
    // 覆盖操作，通知更新
    console.log('数组执行', method, '操作')
  }
})

// 1. 实现响应式
// vue2 Object.defineProperty(obj, key)
// vue3 new Proxy()

// 设置obj的key，拦截他，初始值val
function defineReactive(obj, key, val) {

  // 如果val本身还是对象
  observe(val)

  Object.defineProperty(obj, key, {
    get() {
      console.log('get:', key, val)
      return val
    },
    set(v) {
      // 如果传入的v是对象，则仍要对v进行响应式处理
      observe(v)
      console.log('set:', key, v)
      val = v
      // update()
    }
  })
}

function observe(obj) {
  // 判断obj的值，必须是object，否则直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 判断传入obj类型
  if (Array.isArray(obj)) {
    // 覆盖原型，替换七个变更操作
    obj._proto_ = arrayProto
    // 对数组内部元素进行响应化
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      observe(keys[i])
    }
  } else {
    Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]))
  }

}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: {
    a: 'aaa'
  },
  arr: [1, 2]
}

// 对obj作响应式处理
// defineReactive(obj, 'foo', 'fooo')
observe(obj)

// obj.foo
// obj.foo = 'fooo'
// obj.bar
// obj.bar = 'barr'

// obj.baz
// obj.baz.a
// obj.baz = { b: 'bbb' }

obj.dong = 'dong'
set(obj, 'dong', 'dong')
obj.dong
obj.arr
// obj.arr.push(3)