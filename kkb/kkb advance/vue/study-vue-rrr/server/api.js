const express = require('express')
const app = express()

app.get('/api/courses', (req, res) => {
  setTimeout(() => {
    res.json([{ name: 'web全栈', price: 38 }, { name: 'web高级', price: 89 }, { name: 'web入门', price: 79 }])
  }, 1000)
})

app.listen(3000)