// 1. 实现响应式
// vue2 Object.defineProperty(obj, key, desc)
// vue3 new Proxy()
// 设置obj的key，拦截他，初始值val
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      return val
    },
    set(v) {
      if (v !== val) {
        val = v
        // 如果传入的v是一个对象
        observe(v)
        console.log('set', key)
        // update()
      }
    }
  })
}

// 循环obj，对每一个属性进行拦截
function observe(obj) {
  // 判断obj的值必须是对象
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: {
    a: 1
  }
}
// defineReactive(obj, 'foo', 'foooo')
// defineReactive(obj, 'bar', 'barrr')
observe(obj)

// obj.foo // get foo
// obj.foo = 'fooooooooo' // set foo
// obj.bar // get foo
// obj.bar = 'barrrrrrrr' // set foo
// obj.baz
// obj.baz.a
// obj.dong = 'dong'
set(obj, 'dong', 'dong')
obj.dong