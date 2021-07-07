const myPlugin = {
  install(Vue, options) {
    // heading组件
    // <heading :level='1' :title='title'>{{title}}</heading>
    Vue.component('heading', {
      props: {
        level: {
          type: Number,
          default: 1,
        },
        title: {
          type: String,
          default: '',
        },
        icon: {
          type: String,
        },
      },
      render(h) {
        let children = []
        if (this.icon) {
          // <svg class="icon"><use xlink:href="#icon-cart"></use></svg>
          children.push(h('svg', { class: 'icon' }, [h('use', { attrs: { 'xlink:href': '#icon-' + this.icon } })]))
        }
        children = children.concat(this.$slots.default)
        console.log(`children`, children)
        return h('h' + this.level, { attrs: { title: this.title } }, children)
      },
    })
  }
}

console.log(typeof window !== 'undefined')
console.log(window.Vue)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(myPlugin)
}