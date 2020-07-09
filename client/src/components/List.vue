<template>
  <el-menu class="el-menu-vertical-demo" >
      <el-submenu :index="item.id.toString()" :key="item.id" v-for="item in list">
          <template slot="title">
          <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group>
              <el-menu-item :index="item.id.toString() + '-1'"><i class="el-icon-time"></i>创建节点</el-menu-item>
              <el-menu-item :index="item.id.toString() + '-2'" @click="$emit('get-node-info', item)"><i class="el-icon-odometer"></i>数据更新</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'List',
  props: ['list'],
  data: function () {
    return {
      info: JSON
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
