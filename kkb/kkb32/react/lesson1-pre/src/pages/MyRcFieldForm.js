import React from 'react'
// import Form, { Field } from 'rc-field-form'
import Form, { Field } from '../components/my-rc-field-form'
import Input from '../components/Input'

const nameRules = { required: true, message: '请输入姓名' }
const passwordRules = { required: true, message: '请输入密码' }

export default function MyRcFieldForm(props) {
  const [form] = Form.useForm();
  const onFinish = val => { console.log('onFinish', val) }

  const onFinishFailed = val => { console.log('onFinishFailed', val) }
  return (
    <div>
      <h3>MyRcFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" label="姓名" rules={[nameRules]}>
          <Input placeholder="username" />
        </Field>
        <Field name="password" label="密码" rules={[passwordRules]}>
          <Input placeholder="password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  )
}
