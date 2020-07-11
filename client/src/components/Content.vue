<template>
<div>
  <DrawBeginNode :key="item.id + 'begin'" v-for="item in draw.begin" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'begin',delItem:item})" @line-node="$emit('line-node', item)"></DrawBeginNode>
  <DrawTextNode :key="item.id + 'text'" v-for="item in draw.text" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'text',delItem:item})" @line-node="$emit('line-node', item)"></DrawTextNode>
  <DrawCircleNode :key="item.id + 'circle'" v-for="item in draw.circle" :item="item"  @get-node-info="$emit('get-node-info', $event)" @remove-node="$emit('remove-node', {type:'circle',delItem:item})" @line-node="$emit('line-node', item)"></DrawCircleNode>
  <Canvas :lines="draw.lines"></Canvas>
</div>
</template>

<script>
import DrawBeginNode from '@/components/DrawBeginNode.vue'
import DrawTextNode from '@/components/DrawTextNode.vue'
import DrawCircleNode from '@/components/DrawCircleNode.vue'
import Canvas from '@/components/Canvas.vue'
export default {
  name: 'List',
  components: {
    DrawBeginNode,
    DrawTextNode,
    DrawCircleNode,
    Canvas
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
