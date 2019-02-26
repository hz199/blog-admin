module.exports = {
  devServer: {
    open: true,
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8089',
        changeOrigin: true
      }
    }
  },
  // 额外添加 loader
  chainWebpack: (config) => {
    config.module
      .rule('sass-loader').test(/\.(scss|sass)$/)
  }
}
