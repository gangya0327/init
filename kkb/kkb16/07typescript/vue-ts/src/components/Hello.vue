<template>
  <div>
    <!-- 属性 -->
    <h3>{{msg}}</h3>
    <!-- 新增特性 -->
    <p>
      <input @keydown.enter="addFeature" type="text" />
    </p>
    <!-- ts特性列表 -->
    <ul>
      <li :key="feature.id" v-for=" feature in features">{{feature.name}}</li>
      <li>特性总数：{{count}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import { Feature } from '@/types'
import { getFeatures } from '@/api/feature'

@Component
export default class Hello extends Vue {
  // 属性就是data
  features: Feature[] = []
  // private features: string[] = []

  // 括号中的配置是给vue
  // 变量中的配置是给ts
  @Prop({ type: String, required: true })
  msg!: string

  // 函数直接作为回调
  @Emit()
  addFeature(e: KeyboardEvent): void {
    // target类型EventTarget
    const inp = e.target as HTMLInputElement
    this.features.push({
      id: this.features.length + 1,
      name: inp.value,
      desc: 'new feature'
    })
    inp.value = ''
  }
  // 如果和生命周期同名，那就是生命周期
  created() {
    getFeatures().then((res) => {
      this.features = res.data
    })
    // this.$axios.get<Feature[]>('/api/list').then((res) => {
    //   this.features = res.data
    // })

    // this.features = [
    //   { id: 1, name: '类型注解' },
    //   { id: 2, name: '编译型语言' },
    // ]
  }
  // 存取器用于计算属性
  get count() {
    return this.features.length
  }
}
</script>

<style scoped>
</style>