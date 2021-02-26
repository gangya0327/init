import { effect } from '../node_modules/@vue/reactivity/dist/reactivity.esm-browser.js'
import { mountElement } from './renderer.js'

export function createApp(rootComponent) {
  // app
  return {
    // selector
    mount(rootContainer) {
      const result = rootContainer.setup()
      const isMounted = false
      let prevSubTree
      effect(() => {
        if (!isMounted) {
          // init
          isMounted = true
          // reset
          rootContainer.innerHTML = ``
          // const view = rootContainer.render(result)
          const subTree = rootContainer.render(result)
          prevSubTree = subTree
          // append
          // rootContainer.append(view)
          // rootContainer.append(subTree)
          // vdom -> dom
          mountElement(subTree, rootContainer)
        } else {
          // update
          // diff -> vdom
          const subTree = rootComponent.renderer(result)
          diff(prevSubTree, subTree)
        }
      })
      // rootComponent.render(result)
    }
  }
}