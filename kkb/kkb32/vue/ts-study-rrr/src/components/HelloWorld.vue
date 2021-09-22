<template>
  <div class="hello">
    <!-- 新增特性 -->
    <h1>新增特性</h1>
    <p>
      <input type="text" @keydown.enter="addFeature" />
    </p>
    <h1>特性列表</h1>
    <ul>
      <li
        v-for="feature in features"
        :key="feature.id"
        :class="{ selected: feature.selected }"
      >
        {{ feature.name }}
      </li>
      <li>特性总数：{{ count }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

// 类型别名
type Feature = {
  id: number
  name: string
}

// 交叉类型
type FeatureSelect = Feature & { selected: boolean }

interface Result<T> {
  ok: 0 | 1
  data: T
}
// 泛型方法
function getResult<T>(): Promise<Result<T>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = [
    { id: 1, name: '类型注解', selected: false },
    { id: 2, name: '编译型语言', selected: true },
  ]
  return Promise.resolve({
    ok: 1,
    data,
  })
}

@Component
export default class HelloWorld extends Vue {
  features: FeatureSelect[] = []
  async created(): Promise<void> {
    // this.features = (await getResult<FeatureSelect[]>()).data
    getResult<FeatureSelect[]>().then(result=>{
      this.features = result.data
    })
    Axios.get<FeatureSelect[]>('/api/list').then(result=>{
      this.features = result.data
    })
  }
  addFeature(e: KeyboardEvent): void {
    const input = e.target as HTMLInputElement
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: input.value,
      selected: false,
    }
    this.features.push(feature)
    input.value = ''
  }

  // 计算属性
  get count(): number {
    return this.features.length
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.selected {
  background-color: lightgreen;
}
</style>
