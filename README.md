# draw
 类似drawio效果，本项目采用前后端分离模式开发
- 前台采用 vue + element
- 后端采用 nodejs
- 数据库采用 MySQL
 
## 文件夹说明
- server 后端文件夹
- client 前端文件夹

## 主要内容说明：
1. 实线箭头
`drawArrow (Object)`
- ctx: context对象
- fromX: 开始点x坐标
  - 值类型`number`
- fromY: 开始点y坐标
  - 值类型`number`
- toX: 目标点x坐标
  - 值类型`number`
- toY: 目标点y坐标 
  - 值类型`number`
- controlX: 控制点X坐标
  - 值类型`number`
- controlY: 控制点Y坐标
  - 值类型`number`
- theta 分叉角度
  - 值类型`number`，代表角度
- headlen 箭头大小
  - 值类型`number`，代表箭头向旁边延伸长度
- width 线条宽度（默认1px）
  - 值类型`number`
- color 线条颜色（默认黑色）
  - 值类型`string`
- type 线条类型（默认折线）
  - 值类型`string`，默认值为`line`

说明：当分叉角度与箭头大小均为0时可画直线

2. 数据保存

``` javaScript
draw: {
  text: Array, // 文本节点
  begin: Array, //开始节点
  circle: Array, //圆形节点
  lines: Array //线条信息
},
```
  - 节点数据说明
  ``` javaScript
  Node: {
    id: Number, // 节点id
    name: String, // 节点名称
    type: String, //节点类型
    icon: String, //节点图标
    width: Number, //节点宽度
    height: Number, //节点高度
    left: Number, //节点X坐标
    top: Number, //节点Y坐标
    style: Object //节点样式
  }
  ```
  - 线条数据说明
  ``` javaScript
  line: {
    type: String, //线条类型
    beginNode: Node, //线条开始节点
    endNode: Node, //线条结束节点
    fromX: Number, //线条开始X坐标
    fromY: Number, //线条开始Y坐标
    toX: Number, //线条开始X坐标
    toY: Number, //线条开始Y坐标
    controlX: Number, //曲线控制点X坐标
    controlY: Number, //曲线控制点Y坐标
    theta: Number, //箭头分叉角度
    headlen: Number, //箭头延伸大小
    width: Number, //线条宽度
    color: String //线条颜色
  }
  ```
