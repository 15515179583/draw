<template>
<div class="main">
  <DrawBeginNode></DrawBeginNode>
  <DrawTextNode :key="item.id" v-for="item in draw.coms"></DrawTextNode>
  <DrawCircleNode></DrawCircleNode>
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
  props: ['draw']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
