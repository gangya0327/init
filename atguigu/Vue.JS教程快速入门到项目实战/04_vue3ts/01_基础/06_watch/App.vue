<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    <div>
      姓氏：
      <input type="text" v-model="user.firstName" />
    </div>
    <div>
      名字：
      <input type="text" v-model="user.lastName" />
    </div>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视</legend>
    <div>
      名字：
      <input type="text" v-model="fullName1" />
    </div>
    <div>
      名字：
      <input type="text" v-model="fullName2" />
    </div>
    <div>
      名字：
      <input type="text" v-model="fullName3" />
    </div>
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      firstName: 'peter',
      lastName: 'raven',
    })
    const fullName1 = computed(() => `${user.firstName}_${user.lastName}`)
    const fullName2 = computed({
      get() {
        return `${user.firstName}_${user.lastName}`
      },
      set(val: string) {
        const names = val.split('_')
        console.log('names', names)
        console.log('user.firstName', user.firstName)
        let [firstName, lastName] = names
        user.firstName = firstName
        user.lastName = lastName
      },
    })
    const fullName3 = ref('')
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = `${firstName}_${lastName}`
      },
      { immediate: true, deep: true }
    )

    // 不需要设置immediate
    // watchEffect(() => {
    //   fullName3.value = `${user.firstName}_${user.lastName}`
    // })

    watchEffect(() => {
      const names = fullName3.value.split('_')
      let [firstName, lastName] = names
      user.firstName = firstName
      user.lastName = lastName
    })

    // 监听非响应式数据
    watch([() => user.firstName, () => user.lastName], () => {
      console.log('watching...')
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  },
})
</script>
