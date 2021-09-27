const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send(`
    <html>
      <body>
        <div id="app">
          <h1>传统web项目</h1>
          <p>hello world</p>
        </div>
      </body>
    </html>
  `)
})

app.listen(8081, () => {
  console.log('render ok')
})