import { h } from './core/h.js'
import { ref } from './core/index.js'

export const App = {
  render(context) {
    // view
    // 1. type
    // 2. props
    // 3. children (string | array)
    // const div = document.createElement('div')
    // const p = document.createElement('p')
    // p.innerText = 'hello' + context.count.value
    // div.appendChild(p)
    // return div
    return h(
      'div',
      {
        class: "ccc"
      },
      String(context.count.value)
    )
  },
  setup() {
    const count = ref(0)
    window.count = count
    return {
      count
    }
  }
}