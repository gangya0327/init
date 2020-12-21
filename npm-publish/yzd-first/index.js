import fieldset from './fieldset'

// Vue的插件模式需要暴露一个install方法，让Vue.use()调用
const install = (Vue) => {
  Vue.component(fieldset.name, fieldset)
}

export default install