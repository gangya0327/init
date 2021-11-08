import React from 'react'
import Form, { Field } from 'rc-field-form'
import Input from '../components/Input'

const nameRules = { required: true, message: '请输入姓名' }
const passwordRules = { required: true, message: '请输入密码' }

export default function RcFieldForm(props) {
  const [form] = Form.useForm();
  const onFinish = val => { console.log('onFinish', val) }

  const onFinishFailed = val => { console.log('onFinishFailed', val) }
  return (
    <div>
      <h3>RcFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" label="姓名" rules={[nameRules]}>
          <Input placeholder="username" />
        </Field>
        <Field name="password" label="密码" rules={[passwordRules]}>
          <Input placeholder="password" />
        </Field>
        <Field>
          <button>Submit</button>
        </Field>
      </Form>
    </div>
  )
}
