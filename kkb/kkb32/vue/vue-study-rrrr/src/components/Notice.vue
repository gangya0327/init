<template>
  <div class="box">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
};
</script>

<style scoped>
.box {
  position: fixed;
  top: 10%;
  left: calc(50% - 140px);
  width: 200px;
  padding: 20px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
}
</style>
