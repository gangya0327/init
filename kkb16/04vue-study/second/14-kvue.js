function defineReactive(obj, key, val) {
  observe(val)
  // 创建一个dep，和当前key一一对应
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', key)
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        observe(newVal)
        val = newVal
        console.log('set ', key, ':', newVal)
        // watchers.forEach(w => w.update())
        dep.notify()
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observer(obj)
}

function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key]
      },
      set(newVal) {
        vm[sourceKey][key] = newVal
      }
    })
  })
}

class KVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    observe(this.$data)
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

// 保存更新函数
// const watchers = []
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn
    // watchers.push(this)
    // Dep.target静态属性上设置为当前Watcher实例
    Dep.target = this
    this.vm[this.key] // 读取触发了getter
    Dep.target = null
  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

// Dep 依赖，管理某个key相关所有Watcher实例
class Dep {
  constructor() {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}