const Component = require('../model/component')
module.exports = {
    getComponent : (req,res,next) => {
        Component.getComponent().then(results =>{
            req.data = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
    upDataComponent : (req,res,next) => {
        let component = req.body.component
        com = JSON.parse(component)
        Component.upDataComponent(com).then(results =>{
            req.affectedRows = results
            next()
        }).catch(err =>{
            next(err)
            //console.log(err)
        })
    },
}