<template>
  <div>
    <h2>svg-sprite-load</h2>
    <div>
      <svg>
        <use xlink:href="#icon-cookie"></use>
      </svg>
      <span>饼干</span>
    </div>
    <div>
      <svg>
        <use xlink:href="#icon-crispy"></use>
      </svg>
      <span>蛋黄酥</span>
    </div>
    <div>
      <svg-icon iconClass="strawberry"></svg-icon>
      <span>草莓</span>
    </div>
  </div>
</template>

<script>
import '@/icons/svg/cookie.svg';
// import SvgIcon from '@/components/SvgIcon.vue';

export default {
  // components: { SvgIcon },
};
</script>

<style lang="scss" scoped>
</style>
