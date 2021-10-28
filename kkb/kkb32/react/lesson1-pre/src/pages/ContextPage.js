import React, { Component } from 'react'
import { Context, UserContext } from '../Context'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'
import ConsumerPage from './ConsumerPage'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: { themeColor: 'red' },
      user: { name: 'peter' }
    }
  }
  changeColor = () => {
    const { theme } = this.state
    const { themeColor } = theme
    this.setState({ theme: { themeColor: themeColor === 'red' ? 'green' : 'red' } });
  }
  render() {
    const { theme, user } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        <Context.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ConsumerPage />
          </UserContext.Provider>
        </Context.Provider>
      </div>
    )
  }
}

// 1. 创建一个Context对象
// 2. 创建Provider，传递value
// 3. 子组件消费value，有三种途径：ContextType，useContext，Consumer