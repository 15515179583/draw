const Draw = require('../model/draw')
module.exports = {
    getDraw : (req,res,next) => {
        Draw.getDraw().then(results =>{
            req.data = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    saveDraw : (req,res,next) => {
        let {content} = req.data.content
        console.log(content)
        Draw.getDraw(content).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}