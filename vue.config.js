module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8090,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8089',
        changeOrigin: true
      }
    }
  }
}