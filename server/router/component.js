const express = require('express')
const component = require('../middleware/component')
const componentApp = express()

componentApp.get('/', component.getComponent,(req,res) =>{
    res.send({data:req.data})
})
componentApp.post('/updata', component.upDataComponent,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'节点更新成功'
        })
    } else {
        res.json({
            code:0,
            msg:'节点更新失败'
        })
    }
})

module.exports = componentApp