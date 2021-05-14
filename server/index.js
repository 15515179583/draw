const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/component",require('./router/component'))
app.use("/draw",require('./router/draw'))

app.get("/",(req,res)=>{
    res.send("ok")
}) 

app.listen(3000)