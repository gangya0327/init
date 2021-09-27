const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send(`
    <html>
      <body>
        <div id="app">
          <h1>{{title}}</h1>
          <p>{{message}}</p>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
          new Vue({
            el: '#app',
            data: {
              title: '单页面应用',
              message: 'hello world'
            }
          })
        </script>
      </body>
    </html>
  `)
})

app.listen(8081, () => {
  console.log('render ok')
})