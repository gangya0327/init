const panels = document.querySelectorAll('.panel')

panels.forEach(element => {
  element.addEventListener('click', function() {
    const currentActive = document.getElementsByClassName('active')
    currentActive[0].classList.remove('active')
    this.classList.add('active')
  })
});
