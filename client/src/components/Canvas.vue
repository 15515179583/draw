<template>
  <canvas id="canvas" width="2000" height="700"></canvas>
</template>

<script>
export default {
  name: 'Canvas',
  props: ['lines'],
  data: function () {
    return {
      flag: 1,
      context: {},
      lineWidth: 0.1,
      lineColor: 'black',
      canvasMoveUse: false,
      beginPoint: {
        x: '',
        y: ''
      },
      endPoint: {
        x: '',
        y: ''
      },
      controlPoint: {
        x: '',
        y: ''
      }
    }
  },
  methods: {
    initDraw () {
      const canvas = document.getElementById('canvas')
      this.context = canvas.getContext('2d')
      // this.context.lineWidth = this.lineWidth
      // this.context.strokeStyle = this.lineColor
    },
    getLines (lines) {
      console.log(lines)
    },
    drawSolid (beginPoint, endPoint) {
      this.context.moveTo(beginPoint.x, beginPoint.y)
      this.context.lineTo(endPoint.x, endPoint.y)
      this.context.stroke()
    },
    drawArrow (arrow) {
      var ctx = arrow.ctx
      var fromX = arrow.fromX
      var fromY = arrow.fromY
      var toX = arrow.toX
      var toY = arrow.toY
      var controlX = typeof (arrow.controlX) !== 'undefined' ? arrow.controlX : 'undefined'
      var controlY = typeof (arrow.controlY) !== 'undefined' ? arrow.controlY : 'undefined'
      var theta = typeof (arrow.theta) !== 'undefined' ? arrow.theta : 30
      var headlen = typeof (arrow.headlen) !== 'undefined' ? arrow.headlen : 10
      var width = typeof (arrow.width) !== 'undefined' ? arrow.width : 1
      var color = typeof (arrow.color) !== 'undefined' ? arrow.color : '#000'
      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI
      if (controlX !== 'undefined') {
        angle = Math.atan2(controlY - toY, controlX - toX) * 180 / Math.PI
      }
      var angle1 = (angle + theta) * Math.PI / 180
      var angle2 = (angle - theta) * Math.PI / 180
      var topX = headlen * Math.cos(angle1)
      var topY = headlen * Math.sin(angle1)
      var botX = headlen * Math.cos(angle2)
      var botY = headlen * Math.sin(angle2)
      ctx.save()
      ctx.beginPath()
      var arrowX = fromX - topX
      var arrowY = fromY - topY
      if (controlX === 'undefined' && controlY === 'undefined') {
        ctx.moveTo(arrowX, arrowY)
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(toX, toY)
      } else {
        ctx.moveTo(fromX, fromY)
        ctx.quadraticCurveTo(controlX, controlY, toX, toY)
      }
      arrowX = toX + topX
      arrowY = toY + topY
      ctx.moveTo(arrowX, arrowY)
      ctx.lineTo(toX, toY)
      arrowX = toX + botX
      arrowY = toY + botY
      ctx.lineTo(arrowX, arrowY)
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.stroke()
      ctx.restore()
    }
  },
  mounted () {
    this.initDraw()
    // this.drawSolid({ x: 0, y: 0 }, { x: 100, y: 100 })
    // this.drawArrow(this.context, 0, 0, 400, 100, 30, 30, 1, '#f36')
    this.drawArrow({
      ctx: this.context,
      fromX: 0,
      fromY: 0,
      toX: 200,
      toY: 200,
      headlen: 20,
      theta: 30,
      color: '#751236'
    })
    this.drawArrow({
      ctx: this.context,
      fromX: 0,
      fromY: 0,
      toX: 10,
      toY: 200,
      controlX: 100,
      controlY: 100,
      headlen: 10,
      color: '#000'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
