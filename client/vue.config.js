const path = require('path')

module.exports = {
    publicPath: './',
    devServer: {
      port: 80,
      host: '127.0.0.1',
      proxyTable: {
          '/api': {
            target: 'http://121.36.20.234:3000/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
    }
}