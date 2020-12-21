<template>
  <div>
    <el-dialog
      :before-close="closeDialog"
      :visible.sync="dialogVisible"
      close="closeDialog"
      title="我的组件"
      width="30%"
    >
      <span>这是我封装的组件</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button @click="dialogVisible=false" type="primary">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // props: {
  //   dialogVisible: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  props: ['dialogVisible'],
  methods: {
    closeDialog() {
      this.$emit('update:dialogVisible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>