// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './kreact/react-dom'
import Component from './kreact/Component'
import './index.css';
import Component from 'react';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


class ClassComponent extends Component {
  render() {
    return (
      <div>Class Component</div>
    )
  }
}

function FunctionComponent() {
  return (
    <div>Function Component</div>
  )
}

const jsx = (
  <div className='border'>
    <h1>全栈</h1>
    <a href='https:www.baidu.com'>baidu</a>
    <FunctionComponent></FunctionComponent>
    <ClassComponent></ClassComponent>
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// console.log('ReactDOM.version', ReactDOM.version)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
