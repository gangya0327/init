<template>
  <div>
    <h2>el-form</h2>
    <el-alert title="成功提示的文案" type="success"></el-alert>
    <el-button @click="centerDialogVisible = true" type="success">新增指标</el-button>
    <el-button @click="openDialog" type="danger">编辑指标</el-button>
    <el-dialog :visible.sync="centerDialogVisible" center>
      <el-form :model="ruleForm" class="demo-ruleForm" label-width="100px" ref="ruleForm">
        <el-form-item label="指标ID" prop="id">
          <el-input placeholder="请输入指标名称" v-model="ruleForm.id" />
        </el-form-item>
        <el-form-item label="指标名称" prop="cnName">
          <el-input placeholder="请输入指标名称" v-model="ruleForm.cnName" />
        </el-form-item>
        <el-form-item label="指标英文名" prop="enName">
          <el-input placeholder="请输入指标英文名" v-model="ruleForm.enName" />
        </el-form-item>
        <el-form-item label="指标类型" prop="type">
          <el-select placeholder="请选择指标类型" v-model="ruleForm.type">
            <el-option :value="1" label="指标类" />
            <el-option :value="2" label="图表类" />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button @click="submitForm('ruleForm')" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: null,
        cnName: null,
        enName: null,
        type: null,
      },
      centerDialogVisible: false,
    }
  },
  methods: {
    openDialog() {
      this.centerDialogVisible = true
      this.$nextTick(() => {
        this.ruleForm.id = 1
        this.ruleForm.cnName = 'test'
        this.ruleForm.enName = 'test1'
        this.ruleForm.type = 2
      })
    },
    submitForm(formName) {
      this.centerDialogVisible = false
      this.resetForm(formName)
    },
    resetForm(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>