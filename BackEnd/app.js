const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
// const koaBody = require('koa-body')
const session = require('koa-session')
const staticService = require('koa-static')
const config = require('config')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = new Koa()

const ENV = config.get('env')

if (ENV === 'development' && config.get('app.debug')) {
  app.use(logger())
}

app.use(staticService(path.resolve(__dirname, '../dist')))

app.use(json())

app.use(bodyParser({
  enableTypes: ['json', 'form']
}))

// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     keepExtensions: true,    // 保持文件的后缀
//     maxFileSize: 2 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
//   }
// }))

app.keys = config.get('app.keys')
const sessionConfig = {
  key: config.get('app.sessionKey'),
  maxAge: 1000 * 60 * 60 * 24,
  // maxAge: 5000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}

app.use(session(sessionConfig, app))

errorHandler(app)

// 路由
app.use(router.routes())

app.on('error', (err, ctx) => {
  console.error('Server error: ', err, ctx)
})


module.exports = app
