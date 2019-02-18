<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="项目名称" prop="name">
      <el-input type="name" v-model="ruleForm2.name" ></el-input>
    </el-form-item>
    <el-form-item label="所属产品">
      <el-select v-model="ruleForm2.value5" class="selectForm" placeholder="请选择所属产品线">
        <el-option
          v-for="item in belongproduct"
          :key="item.value"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目经理" prop="leader">
      <el-input type="name" v-model="ruleForm2.leader" ></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="phonenumber">
      <el-input type="number" v-model="ruleForm2.phone_number"></el-input>
    </el-form-item>
    <el-form-item label="运行服务器">
      <el-select  v-model="ruleForm2.value7" multiple class="selectForm" placeholder="请选择">
        <el-option
          v-for="item in run_server"
          :key="item.value"
          :label="item.docker_id"
          :value="item.docker_id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目描述" prop="description">
      <el-input type="text" v-model="ruleForm2.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { addprojectinfo, checkproductinfo, getvirDetails } from '../../utils/api'
  // import { checkproductinfo } from '../../utils/api'
  export default {
    data() {
      return {
        belongproduct: [],
        run_server: [],
        ruleForm2: {
          name: '',
          value5: [],
          leader: '',
          phone_number: '',
          value7: [],
          description: ''
        },
        rules2: {
          belongproduct: [
            { required: true, message: '请选择所属产品', trigger: 'change' }
          ],
          run_server: [
            { required: true, message: '请选择运行服务器', trigger: 'change' }
          ]
        }
      }
    },
    mounted () {
      checkproductinfo().then((res) => {
        this.belongproduct = res.data
        console.log(this.belongproduct)
      })
      getvirDetails().then((res) => {
        this.run_server = res.data
        console.log(this.run_server)
      })
    },
    methods: {
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
        addprojectinfo(this.ruleForm2).then(res => {
          console.log(this.ruleForm2.value5)
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
    padding-top: 50px
    padding-left: 100px
    .selectForm
      width: 100%
</style>
