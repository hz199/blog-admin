const compressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
    open: true,
    port: 8090,
    proxy: {
      '/api': {
        target: `http://127.0.0.1:8088`,
        changeOrigin: true
      }
    }
  },
  // 这个参数回影响代理
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 额外添加 loader
  chainWebpack: (config) => {
    config.module
      .rule('less-loader').test(/\.less$/)
  },
  // 代码gzip压缩
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new compressionWebpackPlugin({
            test: /\.(js|css)$/,
            threshold: 10240,
            deleteOriginalAssets: true
          })
        ]
      }
    }
  }
}
