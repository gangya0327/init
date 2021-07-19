export default {
  render(h) {
    // console.log(this.$attrs);
    // return <a href={this.$attrs.to}>{this.$slots.default}</a>;
    return h('a', { attrs: { href: `#${this.$attrs.to}` } }, this.$slots.default);
  },
}