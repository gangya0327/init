const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let nodes = document.getElementsByClassName('node')
const progressLine = document.getElementById('progress-line')

let activeNode = 1

nextBtn.onclick = function() {
  nodes[activeNode].classList.add('active')
  activeNode++
  update()
}

prevBtn.onclick = function() {
  nodes[activeNode-1].classList.remove('active')
  activeNode--
  update()
}

function update() {
  progressLine.style.width = ((activeNode - 1) / (nodes.length - 1)) * 100 + '%'

  if (activeNode === 1) {
    prevBtn.disabled = true
  } else if (activeNode === nodes.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}