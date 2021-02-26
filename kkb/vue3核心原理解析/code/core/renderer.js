// render platform: dom,canvas,app
// custom renderer
function createElement(type) {
  return document.createElement(type)
}
// handle props
function patchProps(el, key, prevValue, nextValue) {
  if (nextValue === null) {
    el.removeAttibute()
  }
  el.setAttribute(key.nextValue)
}
function createTextNode(text) {
  return document.createTextNode(text)
}
function insert(el, parent) {
  parent.append(el)
}
function removeElement(el, parent) {
  parent.removeNode(el)
}

// vdom -> dom
export function mountElement(vnode, container) {
  // 1. type
  const { type } = vnode
  const el = (vnode.el = createElement(type))
  // 2. props
  const { props } = vnode
  Object.keys(props).forEach(key => {
    const val = props[key]
    patchProps(el, key, null, val)
  })
  // 3. children
  const { children } = vnode
  if (typeof children == 'string') {
    insert(createTextNode(children), el)
  } else if (Array.isArray(children)) {
    children.forEach(v => mountElement(v, el))
  }
  insert(el, container)
}

// n1 old
// n2 new
export function diff(n1, n2) {
  // type
  // props
  // children
  if (n1.type !== n2.type) {
    v1.el.replaceWith(n2.el = createElement(n2.type))
  } else {
    const el = (n2.el = n1.el)
    const { props: newProps } = n2
    const { props: oldProps } = n1
    Object.keys(newProps).forEach(key => {
      const newVal = newProps[key]
      const oldVal = oldProps[key]
      if (newVal !== oldVal) {
        patchProps(el, key, oldVal, newVal)
      }
    })

    Object.keys(oldProps).forEach(key => {
      if (!(key in newProps)) {
        patchProps(el, key, oldProps[key], null)
      }
    })

    const { chidlren: newChildren } = n2
    const { children: oldChildren } = n1
    if (typeof newChildren === 'string') {
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else if (Array.isArray(oldChildren)) {
        el.textContent = newChildren
      }
    } else if (Array.isArray(newChildren)) {
      if (oldChildren === 'string') {
        el.textContent = ''
        newChildren.forEach(v => mountElement(v, el))
      } else if (Array.isArray(oldChildren)) {
        const length = Math.min(newChildren.length, oldChildren.length)
        // 1. 依次对比
        // new: [a,b,c]
        // old: [a,c,b]
        for (let i = 0; i < length; i++) {
          const newChild = newChildren[i]
          const oldChild = oldChildren[i]
          diff(oldChild, newChild)
        }
        // 2. new比old长，需要创建
        // new: [a,b,c,d]
        // old: [a,b,c]
        if (newChildren.length > length) {
          for (let i = length; i < newChildren.length; i++) {
            mountElement(newChildren[i], el)
          }
        }
        // 3. old比new长，需要移除
        // new: [a,b,c]
        // old: [a,b,c,d]
        if (oldChildren.length > length) {
          for (let i = length; i < oldChildren.length; i++) {
            const vnode = oldChildren[i]
            removeElement(vnode.el, el)
          }
        }
      }
    }
  }
}