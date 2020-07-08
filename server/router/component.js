const express = require('express')
const component = require('../middleware/component')
const componentApp = express()

componentApp.get('/', component.getComponent,(req,res) =>{
    res.send(req.data)
})


module.exports = componentApp