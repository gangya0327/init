import './css/index.css'
import css from './css/index.less'
import girl from './images/girl.png'
import logo from './images/logo.png'
import computer from './images/computer.png'

console.log('hello webpack')

const ele = `<div class=${css.ele}>css module</div>`
document.getElementsByClassName('cssmodule')[0].innerHTML = ele

const girlImage = new Image()
girlImage.src = girl
girlImage.width = 200
document.getElementById('image').append(girlImage)

const logoImage = new Image()
logoImage.src = logo
document.getElementById('image').append(logoImage)

const computerImage = new Image()
computerImage.src = computer
computerImage.width = 50
document.getElementById('image').append(computerImage)