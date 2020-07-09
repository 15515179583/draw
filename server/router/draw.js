const express = require('express')
const draw= require('../middleware/draw')
const drawApp = express()

drawApp.get('/', draw.getDraw,(req,res) =>{
    res.send(req.data)
})

drawApp.post('/save', draw.saveDraw,(req,res) =>{
    if(req.affectedRows > 0){
        res.json({
            code:1,
            msg:'画布保存成功'
        })
    } else {
        res.json({
            code:0,
            msg:'画布保存失败'
        })
    }
})
module.exports = drawApp