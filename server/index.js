const express = require('express')
const app = express()

app.use("/component",require('./router/component'))
app.use("/draw",require('./router/draw'))
app.get("/",(req,res)=>{
    res.send("req")
})
app.listen(3000)