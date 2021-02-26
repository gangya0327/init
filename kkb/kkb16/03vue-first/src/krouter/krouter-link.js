export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  // render() {
  //   return <a href={'#' + this.to}>{this.$slots.default}</a>
  // },
  render(h) {
    // <a herf='#/about'>text</a>
    // h(tag, data, children)
    console.log('this.$slots', this.$slots)
    return h('a', { attrs: { href: "#" + this.to } }, this.$slots.default)
  },
}