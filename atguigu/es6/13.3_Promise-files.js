const fs = require('fs')
// fs.readFile('./assets/file.md', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })

const p = new Promise(function(resolve, reject) {
  fs.readFile('./assets/file.md', (err, data) => {
    if (err) throw err
    resolve(data)
  })
})
p.then(value => {
  console.log(value.toString())
})