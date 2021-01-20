function defineReactive(obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key)
      return val
    },
    set(newVal) {
      if (val !== newVal) {
        console.log('set ' + key + " " + newVal)
        observer(newVal)
        val = newVal
      }
    }
  })
}

function observer(obj) {
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
observer(obj)
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