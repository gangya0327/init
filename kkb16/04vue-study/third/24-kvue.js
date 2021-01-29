const orginalProto = Array.prototype
const arrayProto = Object.create(orginalProto)
Array.from(['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort']).forEach(method => {
  arrayProto[method] = function() {
    orginalProto[method].apply(this, arguments)
    console.log('数组执行', method, '操作')
  }
})

function defineReactive(obj, key, val) {
  observer(val)
  // 一个key对应一个Dep
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key)
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (val !== newVal) {
        console.log('set ' + key + " " + newVal)
        observer(newVal)
        val = newVal
        dep.notify()
        // watchers.forEach(w => w.update())
      }
    }
  })
}

function observer(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  if (Array.isArray(obj)) {
    // 覆盖原型，替换7个变更操作
    obj.__proto__ = arrayProto
    // 对数组内部元素执行响应化
    for (let i = 0; i < obj.length; i++) {
      observer(obj[i])
    }
  }
  new Observer(obj)
}

function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    defineReactive(vm, key, vm[sourceKey][key])
    // Object.defineProperty(vm, key, {
    //   get() {
    //     return vm[sourceKey][key]
    //   },
    //   set(newVal) {
    //     vm[sourceKey][key] = newVal
    //   }
    // })
  })
}

class KVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    observer(this.$data)
    proxy(this, '$data')
    new Compile(options.el, this)
  }
}

class Observer {
  constructor(value) {
    this.value = value
    if (typeof value === 'object') {
      this.walk(value)
    }
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

class Dep {
  constructor() {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => {
      console.log('dep', dep)
      dep.update()
    })
  }
}