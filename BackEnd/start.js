const http = require('http')
const ip = require('ip')
const config = require('config')
const app = require('./app')
const { connect } = require('./mongodb')

;
(async () => {
  // 连接数据库
  await connect()

  const normalizePort = function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
      return val
    }

    if (port >= 0) {
      return port
    }

    return false
  }

  const port = normalizePort(config.get('app.port'))
  const server = http.createServer(app.callback())

  // ip
  const host = config.get('env') === 'development' ? '0.0.0.0' : '127.0.0.1'

  // 启动服务
  server.listen(port, host)

  // 错误处理
  server.on('error', (err) => {
    if (err.syscall !== 'listen') {
      throw err
    }

    const bind = typeof port === 'string' ?
      `Pipe ${port}` :
      `Port ${port}`

    switch (err.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`)
        process.exit(1)
        break
      default:
        throw err
    }
  })

  // 监听
  server.on('listening', () => {
    const address = ip.address()

    if (config.get('app.debug')) {
      console.log()
      console.log(`Server is running at http://127.0.0.1:${port}`)
      console.log(`Server is running at http://${address}:${port}`)
    }
  })
})()