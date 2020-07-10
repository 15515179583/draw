const component = require('../middleware/component')

module.exports = class Component extends require('./model'){
    static getComponent(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM component'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取节点失败：${err.message}`)
                reject(err)
            })
        })
    }
    static upDataComponent(component){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE component SET `name` = ?, icon = ?, `left` = ?, top = ? WHERE id = ?'
            this.query(sql,[component.name,component.icon,component.left,component.top,component.id]).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`节点更新失败：${err.message}`)
                reject(err)
            })
        })
    }
}