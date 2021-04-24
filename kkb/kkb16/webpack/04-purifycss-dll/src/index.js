import './css/index.css'
import css from './css/index.less'
import { addFunc } from './expo'
import _ from 'lodash'

import React, { Component } from 'react';
import ReactDom from 'react-dom'

class App extends Component {
  render() {
    return <div>hello react</div>
  }
}
ReactDom.render(<App />, document.getElementById('react'))

console.log('hello webpack~')
console.log(addFunc(1, 2))

console.log(_.join(['a', 'b', 'c'], '***'))
