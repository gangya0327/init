import { useRef } from 'react'

// 第三方store
class FormStore {
  constructor() {
    this.store = {}
  }
  getFieldsValue = () => {
    return { ...this.store }
  }
  getFieldValue = (name) => {
    return this.store[name]
  }
  setFieldsValue = (newStore) => {
    this.store = { ...this.store, ...newStore }
    console.log(`this.store`, this.store)
  }
  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
    }
  }
}

export default function useForm() {
  // 需要一个值，来存储store
  // 要保证在组件卸载前的任何声明周期里，指向的都是同一个对象
  const formRef = useRef()
  if (!formRef.current) {
    const formStore = new FormStore()
    formRef.current = formStore.getForm()
  }
  return [formRef.current]
}