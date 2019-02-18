<template>
  <!-- el-table :data="tableData3" class="physical" :row-class-name="tableRowClassName" -->
  <el-table :data="tableData3" class="physical">
    <el-table-column class="physical-wrapper" label="物理设备信息概览" style="text-align: center">
      <el-table-column prop="status" label="序号" width="300px">
      </el-table-column>
      <el-table-column  prop="phy_number" label="物理设备总数" width="500px" text-align="center">
      </el-table-column>
      <el-table-column prop="address" label="宿主机分类" width="500px">
        <el-table-column prop="name" label="KVM" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="Docker" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="ESXI" width="125px">
        </el-table-column>
        <el-table-column prop="name" label="其他" width="125px">
        </el-table-column>
      </el-table-column>
      <el-table-column label="查看" width="285px">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
    // import { getnumber } from '../../utils/api'
    import { getNumber } from '../../api'

    export default {
      data() {
        return {
          tableData3: []
        }
      },
      created () {
        getNumber().then((count) => {
          this.tableData3 = [count]
          console.log(this.tableData3)
        })
      },
      methods: {
        detail () {
          this.$router.push('/phy_details')
        }
      }
      /* mounted () {
        this.init()
      },
      methods: {
        init() {
          getnumber({}).then(res => {
            this.count = res.data
            console.log('check the return data')
            console.log(this.count)
          })
        }
      } */
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");

  .physical
    position: absolute
    width: 100%
    text-align: center
    .physical-wrapper
      width: 100%
</style>
