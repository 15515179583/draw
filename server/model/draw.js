module.exports = class Draw extends require('./model'){
    static getDraw(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM draw WHERE id = 1'
            this.query(sql).then(results=>{
                resolve(results[0])
            }).catch(err =>{
                console.log(`获取画布失败：${err.message}`)
                reject(err)
            })
        })
    }
    static saveDraw(content){
        return new Promise((resolve,reject)=>{
            let sql = 'UPDATE draw SET content = ? WHERE id = 1'
            this.query(sql,content).then(results=>{
                resolve(results.affectedRows)
            }).catch(err =>{
                console.log(`画布保存成功：${err.message}`)
                reject(err)
            })
        })
    }
}