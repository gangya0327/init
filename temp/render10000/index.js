const content = document.getElementById('content')

const total = 1000
const pageSize = 10
let pageNum = 1
let timer = null

function addByCreateElement() {
  const time1 = new Date()
  timer = setTimeout(() => {
    for (let i = 1; i <= pageSize; i++) {
      let node = document.createElement('li')
      node.innerText = `第${i + (pageNum - 1) * pageSize}条数据`
      content.appendChild(node)
    }
    pageNum++
    if (pageNum * pageSize <= total) {
      addByCreateElement()
    }
    const time3 = new Date()
    console.log(time3 - time1 - 1000)
  }, 1000);
}


function addByCreateDocumentFragment() {
  const time1 = new Date()
  timer = setTimeout(() => {
    let fragment = document.createDocumentFragment('li')
    for (let i = 1; i <= pageSize; i++) {
      let node = document.createElement('li')
      node.innerText = `第${i + (pageNum - 1) * pageSize}条数据`
      fragment.appendChild(node)
    }
    content.appendChild(fragment)
    pageNum++
    if (pageNum * pageSize <= total) {
      addByCreateDocumentFragment()
    }
    const time3 = new Date()
    console.log(time3 - time1 - 1000)
  }, 1000);
}

function addByRequestAnimationFrame() {
  const time1 = new Date()
  let fragment = document.createDocumentFragment('li')
  for (let i = 1; i <= pageSize; i++) {
    let node = document.createElement('li')
    node.innerText = `第${i + (pageNum - 1) * pageSize}条数据`
    fragment.appendChild(node)
  }
  content.appendChild(fragment)
  pageNum++
  if (pageNum * pageSize <= total) {
    window.requestAnimationFrame(addByRequestAnimationFrame)
  }
  const time3 = new Date()
  console.log(time3 - time1)
}

function cleanContent() {
  pageNum = 1
  clearTimeout(timer)
  content.innerText = ''
}
