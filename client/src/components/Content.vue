<template>
<div class="main">
  <DrawBeginNode :key="item.id + 'begin'" v-for="item in draw.coms.begin" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'begin',delItem:item})"></DrawBeginNode>
  <DrawTextNode :key="item.id + 'text'" v-for="item in draw.coms.text" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'text',delItem:item})"></DrawTextNode>
  <DrawCircleNode :key="item.id + 'circle'" v-for="item in draw.coms.circle" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'circle',delItem:item})"></DrawCircleNode>
  <canvas></canvas>
</div>
</template>

<script>
import DrawBeginNode from '@/components/DrawBeginNode.vue'
import DrawTextNode from '@/components/DrawTextNode.vue'
import DrawCircleNode from '@/components/DrawCircleNode.vue'
export default {
  name: 'List',
  components: {
    DrawBeginNode,
    DrawTextNode,
    DrawCircleNode
  },
  props: ['draw'],
  data: function () {
    return {
      info: JSON
    }
  },
  methods: {
    showInfo (nodeInfo) {
      this.info = nodeInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
