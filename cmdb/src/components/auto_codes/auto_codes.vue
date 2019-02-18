<template>
  <div>
    <h1 class="title">请选择需要发布的产品线和项目</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo_ruleForm">
      <el-form-item label="请选择产品线">
        <el-select v-model="ruleForm2.value5" class="demo_product" placeholder="产品线">
          <el-option
            v-for="item in product"
            :key="item.value"
            :label="item.name"
            :value="item.name"
            @change="choseProduct(ruleForm2.value5)">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请选择项目">
        <el-select  v-model="ruleForm2.value7" class="demo_project" placeholder="项目">
          <el-option
            v-for="item in project"
            :key="item.value"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">发布</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { checkproductinfo, checkprojectinfo } from '../../utils/api'
  export default {
    data() {
      return {
        ruleForm2: {
          value5: [],
          value7: []
        },
        product: [],
        project: [],
        rules2: {
          product: [
            { required: true, message: '请选择产品线', trigger: 'change' }
          ],
          project: [
            { required: true, message: '请选择要发布的项目', trigger: 'change' }
          ]
        }
      }
    },
    mounted () {
      checkproductinfo().then((res) => {
        this.product = res.data
        console.log(this.product)
      })
      /* checkprojectinfo().then((res) => {
        this.project = res.data
      }) */
    },
    methods: {
      choseProduct(valuex) {
        checkprojectinfo().then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].name === valuex[0]) {
              this.project[i] = res.data[i]
            }
          }
          console.log('damn it')
          console.log(this.project)
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2.value5)
            console.log(this.ruleForm2.value7)
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
        /* addprojectinfo(this.ruleForm2).then(res => {
          console.log(this.ruleForm2.value5)
        }) */
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
  .title
    text-align: left;
    padding-left: 500px;
    padding-top: 100px;
  .demo_ruleForm
    padding-top: 50px;
    padding-left: 450px;
</style>
