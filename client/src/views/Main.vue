<template>
  <div class="wrap">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-container>
        <el-aside width="230px" style="height: 700px; border: 1px solid #000;">
          <List :list="list" @get-node-info="setNodeInfo($event)" @create-node="createNode($event)"></List>
        </el-aside>
        <el-main style="height: 700px; border: 1px solid #000; padding:0; margin:0 20px">
          <Content :draw="draw" :info="info" @get-node-info="setNodeInfo($event)" @remove-node="removeNode($event)"></Content>
        </el-main>
        <el-aside style="height: 700px; border: 1px solid #000;">
          <Info :info="info" :saveFlag="saveFlag" @save-node-info="saveNodeInfo($event)"></Info>
        </el-aside>
      </el-container>
    </el-container>
    <el-row>
      <el-col :span="24">
        <el-button type="warning" style="width:100%; height:50px; margin-top:30px; font-size:20px" @click="clearDraw">清空画布</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="success" style="width:100%; height:50px; margin-top:10px; font-size:20px" @click="saveDraw">保存画布</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import Content from '@/components/Content.vue'
import Info from '@/components/Info.vue'
export default {
  name: 'Main',
  components: {
    List,
    Content,
    Info
  },
  data: function () {
    return {
      list: Array,
      draw: {
        text: '',
        begin: '',
        circle: '',
        solids: ''
      },
      info: JSON,
      beginNum: '',
      textNum: '',
      circleNum: '',
      saveFlag: true
    }
  },
  methods: {
    getList () {
      this.$axios.get('component').then(res => {
        this.list = res.data.data
      })
    },
    getDraw () {
      this.$axios.get('draw').then(res => {
        var data = JSON.parse(res.data.content)
        this.draw = data
        this.beginNum = data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id
        this.textNum = data.text.length === 0 ? 0 : data.text[data.text.length - 1].id
        this.circleNum = data.circle.length === 0 ? 0 : data.circle[data.circle.length - 1].id
      })
    },
    clearDraw () {
      this.draw = {
        text: [],
        begin: [],
        circle: [],
        solids: []
      }
    },
    saveDraw () {
      var params = new URLSearchParams()
      var content = JSON.stringify(this.draw)
      params.append('content', content)
      this.$axios.post('draw/save', params).then(res => {
        if (res.data.code === 1) {
          this.$message({
            message: '画布保存成功',
            type: 'success'
          })
        } else {
          this.$message.error('画布保存失败')
        }
      })
    },
    setNodeInfo (item) {
      this.info = item
      if (item.updata) {
        this.saveFlag = false
      } else {
        this.saveFlag = true
      }
    },
    saveNodeInfo (node) {
      var params = new URLSearchParams()
      node = JSON.stringify(node)
      console.log(node)
      params.append('component', node)
      this.$axios.post('component/updata', params).then(res => {
        if (res.data.code === 1) {
          this.$message({
            message: '节点更新成功',
            type: 'success'
          })
        } else {
          this.$message.error('节点更新失败')
        }
      }).then(() => {
        this.getList()
      })
    },
    removeNode (val) {
      const type = val.type
      if (type === 'text') {
        this.draw.text = this.draw.text.filter((item) => {
          return item !== val.delItem
        })
      } else if (type === 'begin') {
        this.draw.begin = this.draw.begin.filter((item) => {
          return item !== val.delItem
        })
      } else if (type === 'circle') {
        this.draw.circle = this.draw.circle.filter((item) => {
          return item !== val.delItem
        })
      }
      this.$message({
        message: '节点删除成功',
        type: 'success'
      })
    },
    createNode (item) {
      this.saveFlag = true
      item = { ...item, style: { left: '', top: '' } }
      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
      if (item.type === 'text') {
        item.id = ++this.textNum
        this.draw.text.push(item)
      } else if (item.type === 'begin') {
        item.id = ++this.beginNum
        this.draw.begin.push(item)
      } else if (item.type === 'circle') {
        item.id = ++this.circleNum
        this.draw.circle.push(item)
      }
      this.$message({
        message: '节点创建成功',
        type: 'success'
      })
    }
  },
  mounted: function () {
    this.getDraw()
    this.getList()
  }
}
</script>
