var ws = new WebSocket('ws://localhost:3001')
ws.onmessage = (message) => {
  console.log(message)
}
setTimeout(() => {
  ws.send('hello')
}, 5000);