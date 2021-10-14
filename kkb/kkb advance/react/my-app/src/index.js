import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import logo from './logo192.png'
// import styles from './index.module.css'

// const name = 'react'
// const obj = {
//   firstName: 'Harry',
//   lastName: 'Potter'
// }
// function formatName(name) {
//   return `${name.firstName} ${name.lastName}`
// }
// const greet = <div>good</div>
// const show = false
// const arr = [1, 2, 3]
// const jsx = <div>
//   <div>hello, {name}</div>
//   <div>{formatName(obj)}</div>
//   {greet}
//   {show ? '注册' : '登录'}
//   <ul>
//     {/* diff时候，首先比较type，然后是key，同类型元素key值必须唯一 */}
//     {arr.map(a => <li key={a}>{a}</li>)}
//   </ul>
//   <img src={logo} className='logo' alt="" style={{width: '200px', height: '200px'}} />
// </div>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // jsx,
  document.getElementById('root')
);
