const mongoose = require('mongoose')
const config = require('config')
const glob = require('glob')
const {
  join
} = require('path')
const chalk = require('chalk')

glob.sync(join(__dirname, './schema/', '**/*.js')).forEach(require)

const db = config.get('db.URL')

mongoose.Promise = global.Promise

exports.connect = () => {
  let connectTimes = 0

  return new Promise((resolve, reject) => {
    if (config.get('env') !== 'production') {
      mongoose.set('debug', true)
    }

    mongoose.connect(db, {
      useNewUrlParser: true
    })

    // 断开数据库连接
    mongoose.connection.on('disconnected', () => {
      connectTimes++

      if (connectTimes < 5) {
        mongoose.connect(db, {
          useNewUrlParser: true
        })
      } else {
        throw new Error('数据库挂了！')
      }
    })

    // error
    mongoose.connection.on('error', (err) => {
      reject(err)
    })

    // open
    mongoose.connection.on('open', () => {
      resolve()
      console.log('')
      console.log(chalk.hex('#ffffff').bgGreen.bold('mongodb is ready !!'))
      console.log('')
    })
  })
}