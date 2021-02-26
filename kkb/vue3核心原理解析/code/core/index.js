// import { effect } from '../node_modules/@vue/reactivity/dist/reactivity.esm-browser.js'
export * from '../node_modules/@vue/reactivity/dist/reactivity.esm-browser.js'
export * from './h.js'
// import { mountElement } from './renderer.js'
export * from './createApp.js'

// export function createApp(rootComponent) {
//   // app
//   return {
//     // selector
//     mount(rootContainer) {
//       const result = rootContainer.setup()
//       effect(() => {
//         // reset
//         rootContainer.innerHTML = ``
//         // const view = rootContainer.render(result)
//         const subTree = rootContainer.render(result)
//         // append
//         // rootContainer.append(view)
//         // rootContainer.append(subTree)
//         // vdom -> dom
//         mountElement(subTree, rootContainer)
//       })
//       // rootComponent.render(result)
//     }
//   }
// }