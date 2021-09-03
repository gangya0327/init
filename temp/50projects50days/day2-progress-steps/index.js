const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let nodes = document.getElementsByClassName('node')

nextBtn.onclick = function() {
  let activeNodes = document.querySelectorAll('.node.active')
  if (activeNodes.length > 0) {
    prevBtn.classList.remove('disabled')
    prevBtn.removeAttribute('disabled')
  }
  if (activeNodes.length === nodes.length - 1) {
    nextBtn.classList.add('disabled')
    nextBtn.setAttribute('disabled', 'disabled')
  }
  nodes[activeNodes.length - 1].lastElementChild.classList.add('active')
  nodes[activeNodes.length].classList.add('active')
}

prevBtn.onclick = function() {
  let activeNodes = document.querySelectorAll('.node.active')
  if (activeNodes.length === 2) {
    prevBtn.classList.add('disabled')
    prevBtn.setAttribute('disabled', 'disabled')
  }
  if (activeNodes.length === nodes.length) {
    nextBtn.classList.remove('disabled')
    nextBtn.removeAttribute('disabled')
  }
  nodes[activeNodes.length - 2].lastElementChild.classList.remove('active')
  nodes[activeNodes.length - 1].classList.remove('active')
}