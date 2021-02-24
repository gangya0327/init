// !初次渲染

function render(vnode, container) {
  console.log('vnode', vnode)

  const node = createNode(vnode)
  container.appendChild(node)
}

function createNode(workInProgress) {
  // let node
  // const { type } = vnode

  // // todo 根据组件类型的不同创建不同的node节点
  // if (typeof type === 'string') {
  //   node = updateHostComponent(vnode)
  // } else if (typeof type === 'function') {
  //   node = updateFunctionComponent(vnode)
  // } else if (typeof type === 'class') {
  //   node = updateClassComponent(vnode)
  // } else {
  //   node = updateTextComponent(vnode)
  // }
  const { type, props } = workInProgress
  const node = document.createElement(type)
  updateNode(node, props)
  return node
}

// 原生标签节点
function updateHostComponent(workInProgress) {
  const { type, props } = workInProgress
  if (!workInProgress.stateNode) {
    workInProgress.stateNode = createNode(workInProgress)
  }
  // const node = document.createElement(type)
  // updateNode(node, props)
  reconcileChildren(node, props.children)
  return node
}

// 更新属性
function updateNode(node, nextVal) {
  Object.keys(nextVal)
    // .filter(k => k !== 'children')
    .forEach(k => {
      if (k === 'children') {
        if (typeof nextVal[k] === 'string') {
          node.textContent = nextVal[k]
        } else {
          node[k] = nextVal[k]
        }
      }
    })
}

// 文本标签节点
function updateTextComponent(vnode) {
  const node = document.createTextNode(vnode)
  return node
}

// 函数组件
function updateFunctionComponent(vnode) {
  const { type, props } = vnode
  const vvnode = type(props)
  const node = createNode(vvnode)
  return node
}

function updateClassComponent(vnode) {
  const { type, props } = vnode
  const instance = new type(props)
  const vvnode = instance.render()

  const node = createNode(vvnode)
  return node
}

function reconcileChildren(parentNode, children) {
  const newChildren = Array.isArray(children) ? children : [children]
  for (let i = 0; i < newChildren.length; i++) {
    let child = newChildren[i]
    // vnode->node,node插入到parentNode
    render(child, parentNode)
  }
}

let nextUnitOfWork = null

// fiber
// type 类型
// key
// props
// stateNode
// child 第一个子节点
// sibling 下一个兄弟节点
// return 父节点

function performUnitOfWork(workInProgress) {
  // step1 执行任务
  // todo
  const { type } = workInProgress
  if (typeof type === 'string') {
    updateHostComponent(workInProgress)
  }
  // step2 并返回下一个执行任务
  if (workInProgress.child) {
    return workInProgress.child
  }
  let nextFiber = workInProgress
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.return
  }
}
function workLoop(IdleDeadline) {
  while (nextUnitOfWork && IdleDeadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  // 提交
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
}

requestIdleCallback(workLoop)

function commitRoot() {
  commitWork(wipRoot.child)
  wipRoot = null
}

function commitWork(workInProgress) {
  // 提交自己
  if (!workInProgress) {
    return
  }
  let parentNodeFiber = workInProgress.return
  let parentNode = parentNodeFiber.stateNode
  if (workInProgress.stateNode) {
    parentNode.appendChild(workInProgress.stateNode)
  }
  // 提交子节点
  commitWorker(workInProgress.child)
  // 提交兄弟节点
  commitWorker(workInProgress.sibling)
}

export default {
  render
};
