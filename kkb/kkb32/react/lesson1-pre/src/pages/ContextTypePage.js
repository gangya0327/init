import React, { Component } from 'react'
import { Context, UserContext } from '../Context'

export default class ContextTypePage extends Component {
  static contextType = Context
  static contextType = UserContext
  render() {
    const { themeColor, name } = this.context
    console.log(this.context)
    return (
      <div>
        <h3 style={{ color: themeColor }}>ContextTypePage</h3>
        <p>{name}</p>
      </div>
    )
  }
}
