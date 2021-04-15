import { mount, shallowMount } from '@vue/test-utils'
import Kaikeba from '@/components/Kaikeba.vue'

function add(a, b) {
  return a + b
}

// 测试套件
describe('kkb', () => {
  it('测试add函数', () => {
    expect(add(1, 2)).toBe(3)
  })
})

// @vue/test-utils
describe('Kaikeba.vue', () => {
  it('要求设置created', () => {
    expect(typeof Kaikeba.created).toBe('function')
  })
  it('message初始值出vue-test', () => {
    // 检查data函数是否存在
    expect(typeof Kaikeba.data).toBe('function')
    // 检查返回值
    expect(Kaikeba.data().message).toBe('vue-test')
  })
  it('挂载之后data是开课吧',()=>{
    const wrapper = mount(Kaikeba)
    // 获取组件实例
    const vm = wrapper.vm
    expect(vm.message).toBe('开课吧')
  })
  it('点击按钮之后修改内容',()=>{
    const wrapper = mount(Kaikeba)
    // 通过wrapper查询方法find()
    wrapper.find('button').trigger('click')
    // 获取span，查看渲染结果
    expect(wrapper.vm.message).toBe('改变了')
    expect(wrapper.find('#message').html()).toBe('<div id="message">开课吧</div>')
    expect(wrapper.find('#message').text()).toBe('开课吧')
  })
})