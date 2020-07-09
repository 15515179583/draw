<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>编辑</span>
        </div>
        <el-main>
            <el-form ref="form" label-width="40px">
                <el-form-item label="类型">
                    <el-input disabled v-model="info.type"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="info.name"></el-input>
                </el-form-item>
                <el-form-item label="left">
                    <el-input v-model="info.left"></el-input>
                </el-form-item>
                <el-form-item label="top">
                    <el-input v-model="info.top"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-input v-model="info.icon"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$emit('save-node-info', info)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-card>
</template>

<script>
export default {
  name: 'List',
  props: ['info']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
