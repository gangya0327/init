function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', val)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ', val, ":", newVal)
        observe(newVal)
        val = newVal

        // 
        watchers.forEach(w => w.update())
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  // 创建Observer 执行数据响应式，分辨数据是对象还是数组
  new Observer(obj)
}

// 代理函数，方便用户直接访问$data中的数据
function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    // 将$data上的key代理到vm属性中
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

// 创建构造函数
class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options
    this.$data = options.data
    // 响应化处理
    observe(this.$data)
    // 代理
    proxy(this, '$data')
    // 创建编译器
    new Compile(options.el, this)
  }
}

// 根据对象类型决定如何做响应化
class Observer {
  constructor(value) {
    this.value = value
    // 判断类型
    if (typeof value === 'object') {
      this.walk(value)
    }
  }
  // 对象数据响应化
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  // 数组数据响应化
}

// 观察者 保存更新函数，值发生变化调用更新
const watchs = []
class Watch {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn
    watchs.push(this)
  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}