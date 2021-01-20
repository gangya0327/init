const orginalProto = Array.prototype
const arrayProto = Object.create(orginalProto)
Array.from(['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort']).forEach(method => {
  arrayProto[method] = function() {
    orginalProto[method].apply(this, arguments)
    console.log('数组执行', method, '操作')
  }
})

function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key, val)
      return val
    },
    set(newVal) {
      if (val !== newVal) {
        console.log('set ' + key + " " + newVal)
        observe(newVal)
        val = newVal
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  if (Array.isArray(obj)) {
    // 覆盖原型，替换7个变更操作
    obj.__proto__ = arrayProto
    // 对数组内部元素执行响应化
    for (let i = 0; i < obj.length; i++) {
      observe(obj[i])
    }
  } else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 }, arr: [1, 2, 3] }
observe(obj)
obj.foo
obj.foo = 'foooo'
obj.bar
obj.bar = 'barrr'
obj.baz.a
obj.baz.a = 10
obj.baz = { a: 2 }
obj.baz.a = 20

set(obj, 'dong', 'dong')
obj.dong

obj.arr
obj.arr.push(4)
obj.arr