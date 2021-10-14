import React, { Component } from 'react';

// 1. 不能直接修改state，必须使用setState
// 2. setState会执行批量更新
// 3. 批量链式调用时可以向内传入一个函数

export default class SetStatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    // this.changeValue(1)
    document.getElementById('add').addEventListener('click', this.setCounter)
  }
  changeValue = v => {
    // setState在合成事件和生命周期中是异步的，批量更新，优化性能
    // this.setState({
    //   counter: this.state.counter + v
    // }, () => {
    //   console.log('callback', this.state.counter)
    // })
    // console.log('counter', this.state.counter)

    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    })
  }
  // setCounter = () => {
  //   this.changeValue(1)
  // }
  setCounter = () => {
    // setState在setTimeout和原生事件中是同步的
    setTimeout(() => {
      this.changeValue(1)
      this.changeValue(2)
    }, 1000);
  }
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="add">add</button>
      </div>
    )
  }
}