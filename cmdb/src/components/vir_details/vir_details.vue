<template>
  <el-table :data="tableData2" border style="width: 100%">
    <el-table-column prop="hostname" label="主机名" width="180">
    </el-table-column>
    <el-table-column prop="ip" label="ip地址" width="180">
    </el-table-column>
    <el-table-column prop="docker_id" label="docker_ID信息">
    </el-table-column>
    <el-table-column prop="service" label="运行服务">
    </el-table-column>
    <el-table-column prop="port" label="映射端口号">
    </el-table-column>
  </el-table>
</template>

<script>
  import { getvirDetails } from '../../utils/api'

  export default {
    data () {
      return {
        tableData2: []
      }
    },
    created () {
      getvirDetails().then((res) => {
        this.tableData2 = res.data
        console.log(this.tableData2)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.5.1/lib/theme-chalk/index.css");
</style>
