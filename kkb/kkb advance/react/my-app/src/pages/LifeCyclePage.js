import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: 'omg'
  }
  static propTypes = {
    msg: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromPoprs')
    const { count } = state
    return count > 5 ? { count: 0 } : count
  }
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount')
  // }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState, this.state)
    const { count } = this.state
    return count !== 3
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return { msg: 'msg from getSnapshotBeforeUpdate' }
  }
  // UNSAFE_componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate')
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }
  changeCount = () => { this.setState({ count: this.state.count + 1 }) }
  render() {
    console.log('render', this.props)
    const { count } = this.state
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.changeCount}>change</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  // 初次渲染时不会执行，只有在已挂载组件接受新的props时才会执行
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps', nextProps)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}
