<template>
  <div draggable="true" @dragstart="start(item, $event)" @dragend.stop="end(item, $event)" @drag="$emit('get-node-info', setInfo(item, $event))" @click="$emit('get-node-info', setBaseInfo(item, $event))" class="draw-begin-node">
    <el-card class="box-card node-begin node" :style="item.style"  >
      <el-tag closable @close="$emit('remove-node', item)">
        <i class="node-icon" :class="item.icon"></i>
        <span>{{item.name}}</span>
        <el-button class="line-btn" type="success" circle size="mini" @click="$emit('line-node', item)"></el-button>
      </el-tag>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DrawBeginNode',
  props: ['item'],
  data: function () {
    return {
      baseX: '',
      baseY: '',
      beginX: '',
      beginY: '',
      moveX: '',
      moveY: '',
      endX: '',
      endY: '',
      itemBaseX: '',
      itemBaseY: '',
      flag: true
    }
  },
  methods: {
    start (item, ev) {
      this.beginX = ev.screenX
      this.beginY = ev.screenY
      if (this.flag) {
        this.baseX = ev.screenX
        this.baseY = ev.screenY
        this.itemBaseX = item.left
        this.itemBaseY = item.top
        this.flag = false
      }
    },
    move (item, ev) {
      this.moveX = ev.screenX - this.beginX
      this.moveY = ev.screenY - this.beginY
      this.endX = ev.screenX - this.baseX
      this.endY = ev.screenY - this.baseY
      this.start(item, ev)
    },
    end (item, ev) {
      const x = parseInt(ev.screenX) - parseInt(this.baseX)
      const y = parseInt(ev.screenY) - parseInt(this.baseY)
      item.left = parseInt(this.itemBaseX) + x
      item.top = parseInt(this.itemBaseY) + y
      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
    },
    setInfo: function (item, e) {
      this.move(item, e)
      item.left = parseInt(item.left) + parseInt(this.moveX)
      item.top = parseInt(item.top) + parseInt(this.moveY)
      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
      return item
    },
    setBaseInfo: function (item, e) {
      return item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
