module.exports = class Draw extends require('./model'){
    static getDraw(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM draw'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err =>{
                console.log(`获取画布失败：${err.message}`)
                reject(err)
            })
        })
    }
}