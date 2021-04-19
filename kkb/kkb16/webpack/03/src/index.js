import './css/index.css'
import css from './css/index.less'
import girl from './images/girl.png'
import computer from './images/computer.png'

console.log('hello webpack~')

const cssModule = `<div class=${css.ele}>css module</div>`
document.getElementById('cssModule').innerHTML = cssModule

const girlImage = new Image()
girlImage.src = girl
girlImage.width = 300
document.getElementById('image').append(girlImage)

const computerImage = new Image()
computerImage.src = computer
computerImage.width = 50
document.getElementById('image').append(computerImage)