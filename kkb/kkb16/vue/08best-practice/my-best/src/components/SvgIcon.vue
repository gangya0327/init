<template>
  <svg :class="svgClass" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    className: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
  alert('foo')
      alert("foo")
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0, 15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
