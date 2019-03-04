const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  describe: {
    type: String,
    required: true
  },
  articleContent: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
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

articleSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  } else {
    this.meta.updateAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  }

  await next()
})

module.exports = mongoose.model('Article', articleSchema)