<template>
  <div>
    <button @click="$emit('click')">自定义事件</button>
  </div>
</template>

<script>
export default {
  // 防止原生事件触发两次
  emits: ['click'],
}
</script>
