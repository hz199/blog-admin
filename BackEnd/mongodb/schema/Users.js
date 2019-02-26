const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    unique: true,
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
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }

  await next()
})

module.exports = mongoose.model('User', userSchema)