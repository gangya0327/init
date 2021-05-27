<template>
  <h2>hook函数</h2>
  <h3>x: {{x}} y: {{y}}</h3>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
  <!-- <ul v-else>
    <li>id: {{data.id}}</li>
    <li>address: {{data.address}}</li>
    <li>distance: {{data.distance}}</li>
  </ul>-->
  <ul :key="item.id" v-for="item in data">
    <li>id: {{item.id}}</li>
    <li>title: {{item.title}}</li>
    <li>price: {{item.price}}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// 定义接口，约束对象的类型
// interface IAddressData {
//   id: number
//   address: string
//   distance: string
// }

interface IProductData {
  id: number
  title: string
  price: string
}

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition()
    // const { loading, data, errorMsg } = useRequest<IAddressData>(
    //   'http://localhost:8080/data/address.json'
    // )
    const { loading, data, errorMsg } = useRequest<IProductData[]>(
      'http://localhost:8080/data/product.json'
    )
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    }
  },
})
</script>
