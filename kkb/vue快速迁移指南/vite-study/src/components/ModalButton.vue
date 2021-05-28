<template>
  <button @click="modalOpen=true">弹出一个窗口</button>
  <teleport to="body">
    <div class="modal" v-if="modalOpen">
      <div>
        弹窗
        <button @click="modalOpen=false">关闭</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ModalButton',
  // setup() {
  //   const modalOpen = ref(false)
  //   return { modalOpen }
  // },
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>