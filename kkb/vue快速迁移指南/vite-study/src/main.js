import { createApp, createRenderer, h } from 'vue'
import App from './App.vue'
import './index.css'
import CanvasApp from './components/CanvasApp.vue'

createApp(App)
  .component('comp', {
    render() {
      return h('div', 'i am comp')
    }
  })
  .directive('highlight', {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value
    }
  })
  .mount('#app')

// 自定义渲染器
const nodeOps = {
  createElement(tag, isSvg, is) {
    // 处理元素创建逻辑
    return { tag }
  },
  insert(child, parent, anchor) {
    // 处理元素插入逻辑
    // 1 如果是子元素，只需要将数据保存到虚拟对象上
    child.parent = parent
    if (!parent.childs) {
      parent.childs = [child]
    } else {
      parent.childs.push(child)
    }
    // 2 如果是真实dom，使用canvas绘制
    if (parent.nodeType == 1) {
      draw(child)
      // 事件处理
      if (child.onClick) {
        canvas.addEventListener('click', () => {
          child.onClick()
          setTimeout(() => {
            draw(child)
          }, 0);
        })
      }
    }
  },
  remove: child => { },
  createText: text => { },
  createComment: text => { },
  setText: (node, text) => { },
  setElementText: (el, text) => { },
  parentNode: node => { },
  nextSibling: node => { },
  querySelector: selector => { },
  setScopeId(el, id) { },
  cloneNode(val) { },
  insertStaticContent(content, parent, anchor, isSvg) { },
  patch(el, key, prevValue, nextValue) {
    // 属性更新
    el[key] = nextValue
  },
}
const renderer = createRenderer(nodeOps)

let ctx, canvas

// 扩展mount：首先创建一个画布元素
function createCanvasApp(App) {
  const app = renderer.createApp(CanvasApp)
  const mount = app.mount
  app.mount = function(selector) {
    // 创建并插入画布
    document.createElement('canvas')
    ctx = canvas.getContext('2d')
    // 设置画布基础属性
    canvas.width = 600
    canvas.height = 400
    document.querySelector(selector).appendChild(canvas)

    // 执行默认mount
    mount(canvas)
  }
  return app
}

createCanvasApp(CanvasApp).mount()