<template>
  <el-table :data="tableData3" class="virtual" :row-class-name="tableRowClassName">
    <el-table-column label="虚拟设备信息概览" style="text-align: center">
      <el-table-column prop="status" label="序号" width="300px">
      </el-table-column>
      <el-table-column prop="vir_number" label="虚拟设备总数" width="500px" text-align="center">
      </el-table-column>
      <el-table-column prop="address" label="宿主机分类" width="500px">
        <el-table-column prop="name" label="Vmware" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="Docker" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="KVM" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="其他" width="125px">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="查看" width="285px">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
  import { getNumber } from '../../api'

  export default {
    data() {
      return {
        tableData3: []
      }
    },
    created() {
      getNumber().then((count) => {
        this.tableData3 = [count]
        console.log(this.tableData3)
      })
    },
    methods: {
      detail() {
        this.$router.push('/vir_details')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
</style>
