function defineReactive(obj, key, val) {

  // 如果val本身还是对象，需要递归
  observe(val)

  // 创建一个Dep实例和key对应
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      // 依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(v) {
      if (v !== val) {
        val = v
        // 如果传入的v是一个对象
        observe(v)
        console.log('set', key)
        // update()
        dep.notify()
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

function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(v) {
        vm.$data[key] = v
      }
    })
  })
}

// eslint-disable-next-line no-unused-vars
class KVue {
  constructor(options) {
    // 1. 保存选项
    this.$options = options
    this.$data = options.data

    // 2. 对data选项做响应式处理
    observe(this.$data)

    // 2.5. 代理
    proxy(this)

    // 3. 编译
    new Compile(options.el, this)
  }
}

class Compile {
  constructor(el, vm) {
    // 保存KVue实例
    this.$vm = vm
    // 编译模板树
    this.compile(document.querySelector(el))
  }
  compile(el) {
    // 编译el
    // 1. 获取el所有子节点
    console.log(`el.children`, el.children)
    console.log(`el.childNodes`, el.childNodes)
    el.childNodes.forEach(node => {
      // 2. 判断node类型
      if (node.nodeType === 1) {
        // 元素
        // 递归
        if (node.childNodes.length > 0) {
          this.compile(node)
        }
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // 插值文本
        this.compileText(node)
      }
    })
  }
  // 统一做初始化和更新处理
  update(node, exp, dir) {
    // 初始化
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    // 更新
    new Watcher(this.$vm, exp, function(val) {
      fn && fn(node, val)
    })
  }
  // 处理插值文本
  compileText(node) {
    this.update(node, RegExp.$1, 'text')
  }
  textUpdater(node, val) {
    node.textContent = val
  }
  // 编译element
  compileElement(node) {
    // 1. 获取当前元素的所有元素，并判断他们是不是动态
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      const exp = attr.value
      // 判断attrName是否是指令或事件等动态
      console.log(`attrName`, attrName)
      if (attrName.startsWith('k-')) {
        // 指令
        const dir = attrName.substring(2)
        // 判断是否存在指令处理函数
        this[dir] && this[dir](node, exp)
      }
    })
  }
  text(node, exp) {
    this.update(node, exp, 'text')
  }

  html(node, exp) {
    this.update(node, exp, 'html')
    // node.innerHTML = this.$vm[exp]
  }
  htmlUpdater(node, val) {
    node.innerHTML = val
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}

// const watchers = []
// 负责具体更新任务的Water
// eslint-disable-next-line no-unused-vars
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn

    // watchers.push(this)
    // 触发依赖收集
    Dep.target = this
    vm[key]
    Dep.target = null
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

// 和data中的响应式key之间是一一对应关系
class Dep {
  constructor() {
    // 保存关联的watcher实例
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}