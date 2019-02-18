<template>
  <el-table :data="tableData2" border style="width: 100%">
    <el-table-column prop="name" label="产品线名称" width="180">
    </el-table-column>
    <el-table-column prop="leader" label="产品经理" width="180">
    </el-table-column>
    <el-table-column prop="phonenumber" label="联系方式">
    </el-table-column>
    <el-table-column prop="description" label="产品描述">
    </el-table-column>
  </el-table>
</template>

<script>
  import { checkproductinfo } from '../../utils/api'

  export default {
    data () {
      return {
        tableData2: []
      }
    },
    created () {
      checkproductinfo().then((res) => {
        this.tableData2 = res.data
        console.log(this.tableData2)
      })
    }
  }
</script>

<style scoped>

</style>
