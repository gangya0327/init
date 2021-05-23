;(() => {
  // js的内置对象
  let b: Boolean = new Boolean(1)
  let n: Number = new Number(true)
  let s: String = new String('abc')
  let d: Date = new Date()
  let r: RegExp = /^1/
  let e: Error = new Error('error message')
  console.log(b)

  // DOM，BOM内置对象
  const div: HTMLElement = document.getElementById('app')!
  const divs: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', (event: MouseEvent) => {
    console.log(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
})()
