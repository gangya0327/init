const fs = require('fs')
function readText() {
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/file.md', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function readText1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/file1.md', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function readText2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/file2.md', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
async function main() {
  let file = await readText()
  let file1 = await readText1()
  let file2 = await readText2()
  console.log(file.toString())
  console.log(file1.toString())
  console.log(file2.toString())
}
main()