<template>
  <el-table :data="tableData2" border style="width: 100%">
    <el-table-column prop="name" label="项目名称" width="180">
    </el-table-column>
    <el-table-column prop="belongproduct" label="所属产品线" width="180">
    </el-table-column>
    <el-table-column prop="leader" label="项目经理" width="180">
    </el-table-column>
    <el-table-column prop="phonenumber" label="联系方式">
    </el-table-column>
    <el-table-column prop="runserver" label="运行服务器">
    </el-table-column>
    <el-table-column prop="description" label="项目描述">
    </el-table-column>
  </el-table>
</template>

<script>
  import { checkprojectinfo } from '../../utils/api'

  export default {
    data () {
      return {
        tableData2: []
      }
    },
    created () {
      checkprojectinfo().then((res) => {
        this.tableData2 = res.data
        console.log(this.tableData2)
      })
    }
  }
</script>

<style scoped>

</style>
