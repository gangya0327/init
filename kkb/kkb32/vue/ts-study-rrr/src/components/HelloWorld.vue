<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'

// 类型别名
type Feature = {
  id: number
  name: string
}

// 交叉类型
export type FeatureSelect = Feature & { selected: boolean }

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Component(options: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function Component(target: any): any {
    return Vue.extend(options)
  }
}

@Component({
  data() {
    return {
      msg: 'msgs',
    }
  },
})
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true })
  msg!: string

  features: FeatureSelect[] = []
  async created(): Promise<void> {
    // this.features = (await getResult<FeatureSelect[]>()).data
    getResult<FeatureSelect[]>().then((result) => {
      this.features = result.data
    })
    this.$axios.get<FeatureSelect[]>('/api/list').then((result) => {
      this.features = result.data
    })
  }

  @Watch('features')
  onFeaturesChange(val: FeatureSelect[], old: FeatureSelect[]): void {
    console.log(old.length, 'featrues change=>', val.length)
  }

  @Emit()
  addFeature(e: KeyboardEvent): FeatureSelect {
    const input = e.target as HTMLInputElement
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: input.value,
      selected: false,
    }
    this.features.push(feature)
    input.value = ''
    // 返回值作为事件参数
    return feature
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
