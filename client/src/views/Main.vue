<template>
  <div class="list">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-container>
        <el-aside width="230px" style="height: 700px; border: 1px solid #000;">
          <List :list="list" @get-node-info="setNodeInfo($event)"></List>
        </el-aside>
        <el-main style="height: 700px; border: 1px solid #000; padding:0; margin:0 20px">
          <Content :draw="draw"></Content>
        </el-main>
        <el-aside style="height: 700px; border: 1px solid #000;">
          <Info :info="info" @save-node-info="saveNodeInfo($event)"></Info>
        </el-aside>
      </el-container>
    </el-container>
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
      draw: JSON,
      info: JSON
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
              content: '文字节点1',
              style: {
                left: 0,
                top: 0
              }
            },
            {
              id: '2',
              content: '文字节点2',
              style: {
                left: 100,
                top: 500
              }
            }
          ],
          begin: [

          ]
        },
        solids: []
      }
    },
    setNodeInfo (item) {
      this.info = item
    },
    saveNodeInfo (node) {
      console.log(node)
    }
  },
  mounted: function () {
    this.getList()
  }
}
</script>
