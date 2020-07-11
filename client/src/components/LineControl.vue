<template>
<div>
  <el-row style="margin:15px 0">
    <el-col :span="2">
        <el-alert title="线条信息" type="success" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-select v-model="lineRules.type">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="2">
        <el-alert title="线条宽度" type="success" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-input-number v-model="lineRules.width" :step="1"></el-input-number>
    </el-col>
    <el-col :span="2">
        <el-alert title="线条颜色" type="success" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="1">
      <el-color-picker v-model="lineRules.color"></el-color-picker>
    </el-col>
    <el-col :span="2">
        <el-alert title="箭头角度" type="warning" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-input-number v-model="lineRules.theta" :step="10"></el-input-number>
    </el-col>
  </el-row>
  <el-row style="margin:15px 0">
    <el-col :span="2">
        <el-alert title="曲线控制点X" type="success" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-input-number v-model="lineRules.controlX" :step="10"></el-input-number>
    </el-col>
    <el-col :span="2">
        <el-alert title="曲线控制点Y" type="success" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-input-number v-model="lineRules.controlY" :step="10"></el-input-number>
    </el-col>
    <el-col :span="2">
        <el-alert title="箭头大小" type="warning" :closable="false" center></el-alert>
    </el-col>
    <el-col :span="4">
      <el-input-number v-model="lineRules.headlen" :step="10"></el-input-number>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'LineControl',
  props: ['lineRules'],
  data () {
    return {
      options: [{
        value: 'line',
        label: '直线箭头'
      }, {
        value: 'curve',
        label: '曲线箭头'
      }, {
        value: 'broken',
        label: '折线箭头'
      }]
    }
  },
  watch: {
    lineRules: function () {
      console.log(this.lineRules)
    },
    width: function () {
      console.log(this.lineRules)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
