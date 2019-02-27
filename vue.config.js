const compressionWebpackPlugin = require('compression-webpack-plugin')

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
  productionSourceMap: false,
  // 额外添加 loader
  chainWebpack: (config) => {
    config.module
      .rule('less-loader').test(/\.less$/)
  },
  // 代码gizp压缩
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
