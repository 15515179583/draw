module.exports = {
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true, // 允许跨域
              pathRewrite: { // 重写路径
                '^/api': ''
              }
            }
        }
        // proxy: 'http://localhost:3000'
    }
    // devServer: {
    //     proxy:"http://127.0.0.1:3000", //开发环境的跨域问题解决，后端springboot服务ip 和 端口
    //     port: 8080, //dev模式下的前端服务端口，也就是浏览器通过localhost：8085 访问前端页面
    //     host: '127.0.0.1',
    // },
}