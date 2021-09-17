const msg = 'typescript'

function sayHello(msg: string) {
  return 'heelo, ' + msg
}
document.body.textContent = sayHello(msg)
