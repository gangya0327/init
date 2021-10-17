import React, { PureComponent } from 'react'

// 浅比较，必须使用clas形式
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      obj: { num: 0 }
    }
  }
  setCount = () => {
    this.setState({ count: 100 })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState !== this.state.count
  // }
  render() {
    const { count } = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <p onClick={this.setCount}>{count}</p>
      </div>
    )
  }
}
