import React, { Component } from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {
  static contextType = FieldContext
  getControlled = () => {
    const { getFieldValue, setFieldsValue } = this.context
    console.log(`this.context`, this.context)
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value
        setFieldsValue({ [name]: newValue })
        console.log('newValue', newValue)
      }
    }
  }
  render() {
    const { children } = this.props
    return React.cloneElement(children, this.getControlled())
  }
}
