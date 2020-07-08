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
}