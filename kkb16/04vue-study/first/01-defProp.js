function defineReactive(obj, key, val) {
  // 递归
  observe(val)
  // 对传入obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', key, val)
      return val
    },
    set(newVal) {
      console.log(22, val)
      if (newVal !== val) {
        console.log('set ', key, ':', newVal)
        observe(newVal)
        val = newVal
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // 希望传入的是obj
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

// 响应式
const obj = { foo: 'foo1', bar: 'bar1', baz: { a: 1 }, arr: [1, 2, 3] }
observe(obj)
obj.foo
obj.foo = 'fooooo'
obj.bar
obj.bar = 'barrrr'
obj.baz.a
obj.baz.a = 2
obj.baz = { a: 9 }
obj.baz.a = 8
// obj.dong = 'dog'
set(obj, 'dong', 'dog')
obj.dong
obj.arr.push(4) // Object.defineProperty()对数组无效