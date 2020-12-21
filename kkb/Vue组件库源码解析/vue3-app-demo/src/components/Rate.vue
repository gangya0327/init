<template>
  <div class="el-rate">
    <span
      :key="key"
      @click="selectValue(item)"
      @mousemove="setCurrentValue(item)"
      @mouseout="resetCurrentValue"
      class="el-rate__item"
      style="cursor:pointer"
      v-for="(item,key) in max"
    >
      <i
        :class="'el-icon-star-'+(currentValue >= item ? 'on' : 'off')"
        class="el-rate__icon"
        style="color:#f7ba2a"
      ></i>
    </span>
  </div>
</template>

<script>
/**
 * 1. 显示评分列表
 *  - 总分数
 *  - 当前分数
 * 2. 添加用户交互
 *  - 鼠标移入
 */
import { ref, context } from 'vue'

export default {
  name: 'Rate',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    console.log(props)
    console.log(context)

    let currentValue = ref(props.modelValue)
    console.log(currentValue)

    const setCurrentValue = (val) => {
      // 原始值的响应式数据不能直接赋值
      currentValue.value = val
      console.log(currentValue)
    }
    const resetCurrentValue = () => {
      currentValue.value = props.modelValue
    }
    const selectValue = (val) => {
      // context.emit('change', val)
      context.emit('update:modelValue', val)
    }

    return {
      max: 5,
      currentValue,

      setCurrentValue,
      resetCurrentValue,
      selectValue,
    }
  },
}
</script>