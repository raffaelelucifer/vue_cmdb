<template>
  <el-container style="height: 100%">
    <el-aside height=100% width="300px" style="background-color: rgb(238, 241, 246)">
      <el-menu style="height:100%" :default-openeds="['1', '2', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>产品与项目管理</template>
          <el-menu-item-group>
            <template slot="title">产品线</template>
            <el-menu-item index="1-1">
              <router-link to="/check_product">产品线管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/add_product">添加产品线</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">项目</template>
            <el-menu-item index="1-3">
              <router-link to="/check_project">项目管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/add_project">添加项目</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>资产管理</template>
            <el-menu-item index="3-1">
              <router-link to="/main_interface">物理资产管理</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/virtual_main">虚拟资产管理</router-link>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>自动化平台</template>
            <el-menu-item index="3-1">
              <router-link to="/auto_codes">平台1-发布代码</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/auto_config">平台2-发布配置</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link to="/auto_sql">平台3-发布数据</router-link>
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(5).fill(item)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");

  .el-header
    background-color: #B3C0D1
    color: #333
    line-height:  60px

  .el-aside
    color: #333
</style>
