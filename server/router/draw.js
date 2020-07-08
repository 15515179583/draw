const express = require('express')
const draw= require('../middleware/draw')
const drawApp = express()

drawApp.get('/', draw.getDraw,(req,res) =>{
    res.send(req.data)
})


module.exports = drawApp