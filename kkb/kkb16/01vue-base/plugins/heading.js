export default myPlugin = {
  install(Vue, options) {
    // heading组件
    // <heading :level='1' :title='title' icon='cart'>{{title}}</heading>
    // <h2 title='title'><svg class='icon'><use xlink:href='#icon-cart' /></svg></h2>
    Vue.component('heading', {
      functional: true, // 函数式组件
      // props: {
      //   level: {
      //     type: String,
      //     required: true,
      //   },
      //   title: {
      //     type: String,
      //     default: '',
      //   },
      //   icon: String,
      // },
      render(h, context) {
        console.log('context', context)
        // 子节点数组
        let children = []
        // 属性获取
        const { icon, title, level } = context.props
        // icon属性处理
        if (icon) {
          children.push(h('svg', { class: 'icon' }, [h('use', { attrs: { 'xlink-href': '#icon-' + icon } })]))
        }
        // 拼接子节点
        children = children.concat(context.children)

        const vnode = h(
          'h' + level, // 参数1，tagname
          { attrs: { title: title } }, // 参数2，{}
          children // 参数3，子节点vnode数组
        )
        console.log('vnode', vnode)
        return vnode
      },
    })
  }
}

// if (typeof window !== 'undefined' && window.Vue) {
//   // 使用插件
//   window.Vue.use(myPlugin)
// }