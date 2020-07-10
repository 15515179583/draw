module.exports = {
    devServer: {
      port: 80,
      host: '127.0.0.1',
      proxy: {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
    }
}