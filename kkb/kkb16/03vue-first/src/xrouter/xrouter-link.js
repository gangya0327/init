export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  // render(h) {
  //   console.log(this.$slots.default)
  //   return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
  // }
  render() {
    return <a href={'#' + this.to}>{this.$slots.default}</a>
  }
}