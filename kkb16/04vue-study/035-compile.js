class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)
    if (this.$el) {
      this.compile(this.$el)
    }
  }
  compile(el) {
    console.log(el)
    const childNodes = el.childNodes
    console.log(childNodes)
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        console.log('编译元素', node.nodeName)
        this.compileElement(node)
      } else if (this.isInter(node)) {
        console.log('编译插值绑定', node.textContent)
        this.compileText(node)
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  isElement(node) {
    return node.nodeType === 1
  }
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
  compileText(node) {
    // node.textContent = this.$vm[RegExp.$1]
    this.upate(node, RegExp.$1, 'text')
  }
  compileElement(node) {
    const nodeAttrs = node.attributes
    // 以k-xx='oo'为例
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      const exp = attr.value
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2)
        this[dir] && this[dir](node, exp)
      }
    })
  }
  isDirective(attr) {
    return attr.indexOf('k-') === 0
  }
  upate(node, exp, dir) {
    // 指令对应的更新函数xxUpdater
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    // 更新处理
    new Watcher(this.$vm, exp, function(val) {
      fn && fn(node, val)
    })
  }
  textUpdater(node, value) {
    node.textContent = value
  }
  text(node, exp) {
    // node.textContent = this.$vm[exp]
    this.upate(node, exp, 'text')
  }
  html(node, exp) {
    // node.innerHTML = this.$vm[exp]
    this.upate(node, exp, 'html')
  }
  htmlUpdater(node, value) {
    node.innerHTML = value
  }
}