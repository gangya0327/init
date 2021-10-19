import React, { Component } from 'react';

export function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }
    handleChange = e => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }
    getFieldDecorator = (fieldName, option) => InputCmp => {
      this.options[fieldName] = option
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName || ''],
        onChange: this.handleChange
      })
    }
    setFieldsValue = (newStore) => {
      this.setState(newStore)
    }
    getFieldValue = name => {
      return this.state[name]
    }
    getFieldsValue = () => {
      return this.state
    }
    validateFields = (callback) => {
      let err = []
      for (let fieldName in this.options) {
        if (this.state[fieldName] === undefined) {
          err.push({ [fieldName]: 'err' })
        }
      }
      if (err.length === 0) {
        callback(null, { ...this.state })
      } else {
        callback(err, { ...this.state })
      }
    }
    getForm = () => {
      return {
        getFieldDecorator: this.getFieldDecorator,
        setFieldsValue: this.setFieldsValue,
        getFieldValue: this.getFieldValue,
        getFieldsValue: this.getFieldsValue,
        validateFields: this.validateFields
      }
    }
    render() {
      const form = this.getForm()
      return <Cmp {...this.props} form={form}></Cmp>
    }
  }
}