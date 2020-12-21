const websocket = require('ws')
const websocketServer = websocket.Server
const wss = new websocketServer({
  port: 4000
})
wss.on('connection', (ws) => {
  ws.send('你好')
  setTimeout(() => {
    ws.send('websocket')
  }, 2000);
  ws.on('message', (mes) => {
    console.log(mes)
    ws.send('收到消息')
  })
})