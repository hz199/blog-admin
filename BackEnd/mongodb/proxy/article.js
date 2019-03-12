const Articles = require('../schema/Article')

exports.createArticle = (data) => {
  const Article = new Articles(data)

  return Article.save()
}

exports.queryAll = (option, tags) => {
  let params = tags.length > 0 ? { tags } : {}

  return Articles.find(params)
    .skip((option.currentPage - 1) * option.showCount)
    .limit(option.showCount)
    .sort({'_id': -1})
    .exec()
}

// 查询文章总数
exports.queryCount = () => Articles.count()

exports.queryOneWithId = id => Articles.findOne({ _id: id}).exec()

exports.deleteWithId = id => Articles.deleteOne({ _id: id}).exec()

exports.updateArticleById = (id, payload) => Articles.findByIdAndUpdate(id, payload).exec()
