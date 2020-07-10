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
- fromY: 开始点y坐标
- toX: 目标点x坐标
- toY: 目标点y坐标 
- controlX: 控制点X坐标,
- controlY: 控制点Y坐标,
- theta 分叉角度
- headlen 箭头大小
- width 线条宽度
- color 线条颜色
当分叉角度与箭头大小均为0时可画直线