<template>
  <div class="list">
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
        <el-button type="success" style="width:100%; height:50px; margin-top:30px; font-size:20px" @click="saveDraw">保存画布</el-button>
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
        coms: {
          text: Array,
          begin: [],
          circle: [],
          solids: []
        }
      },
      info: JSON,
      beginNum: 2,
      textNum: 2,
      circleNum: 1,
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
      this.draw = {
        coms: {
          text: [
            {
              id: '1',
              name: '文字节点1',
              type: 'test',
              icon: '',
              left: 0,
              top: 100,
              style: {
                left: 0,
                top: 100 + 'px'
              }
            },
            {
              id: '2',
              name: '文字节点2',
              type: 'test',
              icon: '',
              left: 100,
              top: 300,
              style: {
                left: 100 + 'px',
                top: 300 + 'px'
              }
            }
          ],
          begin: [
            {
              id: '1',
              name: '开始节点1',
              type: 'begin',
              icon: 'el-icon-view ',
              left: 200,
              top: 100,
              style: {
                left: 200 + 'px',
                top: 100 + 'px'
              }
            },
            {
              id: '2',
              name: '开始节点2',
              type: 'begin',
              icon: '',
              left: 300,
              top: 300,
              style: {
                left: 300 + 'px',
                top: 300 + 'px'
              }
            }
          ],
          circle: [
            {
              id: '1',
              name: '圆形节点2',
              type: 'circle',
              icon: '',
              left: 500,
              top: 500,
              style: {
                left: 500 + 'px',
                top: 500 + 'px'
              }
            }
          ],
          solids: [
          ]
        }
      }
      // this.$axios.get('draw').then(res => {
      //   this.draw = res.data.data
      //   console.log(res.data.data)
      // })
      this.draw = {}
    },
    saveDraw () {
      this.$axios.post('draw/save', { content: this.draw }).then(res => {
        console.log(res.data.code)
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
      console.log(node)
    },
    removeNode (val) {
      const type = val.type
      if (type === 'text') {
        this.draw.coms.text = this.draw.coms.text.filter((item) => {
          return item !== val.delItem
        })
      } else if (type === 'begin') {
        this.draw.coms.begin = this.draw.coms.begin.filter((item) => {
          return item !== val.delItem
        })
      } else if (type === 'circle') {
        this.draw.coms.circle = this.draw.coms.circle.filter((item) => {
          return item !== val.delItem
        })
      }
    },
    createNode (item) {
      this.saveFlag = true
      item = { ...item, style: { left: '', top: '' } }
      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
      if (item.type === 'text') {
        item.id = ++this.textNum
        this.draw.coms.text.push(item)
      } else if (item.type === 'begin') {
        item.id = ++this.beginNum
        this.draw.coms.begin.push(item)
      } else if (item.type === 'circle') {
        item.id = ++this.circleNum
        this.draw.coms.circle.push(item)
      }
    }
  },
  mounted: function () {
    this.getDraw()
    this.getList()
  }
}
</script>
