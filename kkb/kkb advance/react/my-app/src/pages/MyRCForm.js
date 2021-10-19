import React, { Component } from 'react'
import Input from '../components/Input'
// import { createForm } from 'rc-form'
import { createForm } from '../components/my-rc-form'

const nameRules = { required: true, message: '请输入用户名' }
const passwordRules = { required: true, message: '请输入密码' }

@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    setFieldsValue({ username: 'abc' })
  }
  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form
    console.log(getFieldsValue())
    validateFields((err, values) => {
      if (err) {
        console.log('error', err)
      } else {
        console.log('ok', values)
      }
    })
  }
  render() {
    console.log(`props`, this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator('username', { rules: [nameRules] })(
          <Input placeholder='输入内容'></Input>
        )}
        {getFieldDecorator('password', { rules: [passwordRules] })(
          <Input placeholder='输入内容'></Input>
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default MyRCForm