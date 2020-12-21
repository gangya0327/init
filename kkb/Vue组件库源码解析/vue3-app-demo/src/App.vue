<template>
  <div id="app">
    <h1>vue3.0</h1>
    <h2>RateValue {{data.rateValue}}</h2>
    <!-- <rate :value="data.rateValue" @change="changeRateValue"></rate> -->
    <rate v-model="data.rateValue"></rate>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Rate from '@/components/Rate'
export default {
  name: 'App',
  components: {
    Rate,
  },
  setup() {
    let data = reactive({
      rateValue: 1,
    })
    // const changeRateValue = (val) => {
    //   data.rateValue = val
    // }
    return {
      data,

      // changeRateValue
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
