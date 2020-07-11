# draw
 类似drawio效果，本demo采用前后端分离模式开发
 前台采用 vue + element
 后端采用 nodejs
## 文件夹说明
- server 后端文件夹
- client 前端文件夹

## 函数封装说明：
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