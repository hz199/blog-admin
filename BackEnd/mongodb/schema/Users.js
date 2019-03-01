const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String
  },
  email: {
    unique: true, // 创建唯一索引 不可重复
    type: String
  },
  password: {
    unique: true,
    type: String
  },
  meta: {
    createAt: {
      type: String,
      default: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    },
    updateAt: {
      type: String,
      default: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }
  }
})

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  } else {
    this.meta.updateAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  }

  await next()
})

module.exports = mongoose.model('User', userSchema)