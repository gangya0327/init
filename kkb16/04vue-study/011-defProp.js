function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', key)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        observe(newVal)
        val = newVal
        console.log('set ', key, ':', newVal)
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}
function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 } }
observe(obj)
obj.foo
obj.foo = 'foooo'
obj.bar
obj.bar = 'barrr'
obj.baz.a = 10

obj.baz = { a: 8 }
obj.baz.a = 88

obj.dong = 'dong'
set(obj, 'dong', 'dong')
obj.dong

// 改变数组的方法：pop,push,shift,unshift,reverse,sort,splice
obj.arr = [1, 2]
obj.arr.push(3)