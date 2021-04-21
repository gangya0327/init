// import React, { Component } from 'react';
// import ReactDom from 'react-dom'

// class App extends Component {
//   render() {
//     return <div>hello world</div>
//   }
// }

// ReactDom.render(<App />, document.getElementById('app'))

// // 引入polyfill
// import '@babel/polyfill'

// const arr = [new Promise(() => { }), new Promise(() => { })]

// arr.map(item => {
//   console.log(item)
// })

import './css/index.css'
import css from './css/index.less'
import girl from './images/girl.png'
import computer from './images/computer.png'

// const axios = require('axios')

// import counter from './counter'
// import number from './number'

// counter()
// number()

// if(module.hot){
//   module.hot.accept('./number.js', function () {
//     document.getElementById('jshot').removeChild(document.getElementById('number'))
//     number()
//   })
// }

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

// axios.get('/api/info').then(res => {
//   console.log(res)
// })

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.getElementById('btn').appendChild(btn)

// btn.onclick = () => {
//   var span = document.createElement('span')
//   span.innerHTML = '<br/>item'
//   document.getElementById('btn').appendChild(span)
// }