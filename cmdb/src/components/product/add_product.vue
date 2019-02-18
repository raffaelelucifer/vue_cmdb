<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="产品名称" prop="name">
      <el-input type="name" v-model="ruleForm2.name" ></el-input>
    </el-form-item>
    <el-form-item label="产品经理" prop="leader">
      <el-input type="name" v-model="ruleForm2.leader" ></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="phonenumber">
      <el-input type="number" v-model="ruleForm2.phone_number"></el-input>
    </el-form-item>
    <el-form-item label="产品描述" prop="description">
      <el-input type="text" v-model="ruleForm2.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { addproductinfo } from '../../utils/api'
  export default {
    data() {
      return {
        ruleForm2: {
          name: '',
          leader: '',
          phone_number: '',
          description: ''
        },
         rules2: {
          /* phone_number: [
            { validator: validatePhonenumber, trigger: 'blur' }
          ] */
        }
      }
    },
    methods: {
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
        addproductinfo(this.ruleForm2).then(res => {
          console.log(this.ruleForm2)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.5.1/lib/theme-chalk/index.css")
  .demo-ruleForm
    top: 200px
    left: 250px
    width: 40%
</style>
