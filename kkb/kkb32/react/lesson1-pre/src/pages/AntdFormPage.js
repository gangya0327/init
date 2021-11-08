import React, { useEffect } from 'react'
import { Form, Button, Input } from 'antd'
import 'antd/dist/antd.css'

const FormItem = Form.Item
const nameRules = { required: true, message: '请输入姓名' }
const passwordRules = { required: true, message: '请输入密码' }

export default function AntdFormPage(props) {
  const [form] = Form.useForm();

  const onFinish = val => { console.log('onFinish', val) }

  const onFinishFailed = val => { console.log('onFinishFailed', val) }

  useEffect(() => {
    form.setFieldsValue({ username: 'default' })
    console.log('form', form)
  })

  return (
    <div>
      <h3>AntdFormPage</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem name="username" label="姓名" rules={[nameRules]}>
          <Input placeholder="username" />
        </FormItem>
        <FormItem name="password" label="密码" rules={[passwordRules]}>
          <Input placeholder="password" />
        </FormItem>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
