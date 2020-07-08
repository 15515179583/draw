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
}