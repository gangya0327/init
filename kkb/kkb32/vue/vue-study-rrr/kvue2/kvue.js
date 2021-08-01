// 数组响应式
// 1. 替换数组原型中的7个方法
const originalProto = Array.prototype
// 备份一份，修改备份
const arrayProto = Object.create(originalProto);
['push', 'pop', 'shift', 'unshift'].forEach(method => {
  arrayProto[method] = function() {
    originalProto[method].apply(this, arguments)
    // 覆盖操作
    console.log('数组执行', method, '操作')
  }
})

// 对象响应式
function defineReactive(obj, key, val) {

  // 如果val本身还是对象
  observe(val)

  // 创建一个Dep和key对应
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      console.log('get:', key, val)
      // 依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(v) {
      // 如果传入的v是对象，则仍要对v进行响应式处理
      observe(v)
      console.log('set:', key, v)
      val = v
      // update()
      // watchers.forEach(w => w.update())
      dep.notify()
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
    obj._proto_ = arrayProto
    // 对数组内部元素执行响应化
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      observe(keys[i])
    }
  } else {
    Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]))
  }

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

export default class KVue {
  constructor(options) {
    // 1. 保存选项
    this.$options = options
    this.$data = options.data

    // 2. 对data作响应式处理
    observe(this.$data)

    // 2.5 代理
    proxy(this)

    // 3. 编译
    new Compile(options.el, this)
  }
}

class Compile {
  constructor(el, vm) {
    // 保存kvue实例
    this.$vm = vm
    // 编译模板树
    this.compile(document.querySelector(el))
  }
  // el是模板中的根节点
  compile(el) {
    // 1. 获取el所有子节点
    el.childNodes.forEach(node => {
      // 2. 判断node类型
      if (node.nodeType === 1) {
        // 元素
        console.log('element', node.nodeName)
        this.compileElement(node)
        // 递归该元素
        if (node.childNodes.length > 0) {
          this.compile(node)
        }
      } else if (this.isInter(node)) {
        // 文本
        console.log('text', node.textContent)
        this.compileText(node)
      }
    })
  }

  // 统一做初始化和更新
  update(node, exp, dir) {
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
    // node.textContent = this.$vm[RegExp.$1]
  }

  textUpdater(node, val) {
    node.textContent = val
  }

  // 编译element
  compileElement(node) {
    // 1. 获取当前元素的所有属性，判断是不是动态的
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      console.log(`attr`, attr)
      const attrName = attr.name
      const exp = attr.value
      // 判断attrName是否是指令还是事件
      if (attrName.startsWith('k-')) {
        // 指令，截取后面部分
        const dir = attrName.substr(2)
        // 判断是否存在指令处理函数，若存在则调用
        this[dir] && this[dir](node, exp)
      }
    })
  }

  // k-text
  text(node, exp) {
    this.update(node, exp, 'text')
    // node.textContent = this.$vm[exp]
  }

  // k-html
  html(node, exp) {
    this.update(node, exp, 'html')
    // node.innerHTML = this.$vm[exp]
  }

  htmlUpdater(node, val) {
    node.innerHTML = val
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    // /\{\{(.*)\}\}/.test('{{xxx}}') => true
    // RegExp.$1 => xxx
  }
}

// const watchers = []

// 负责具体更新任务的watcher
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

// 和data中的响应式的key是一一对应关系
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