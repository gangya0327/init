document.body.addEventListener('touchstart', event => {
  if (event.target === area) {
      event.preventDefault()
  }
}, {passive: true});