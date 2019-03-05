const Articles = require('../schema/Article')

exports.createArticle = (data) => {
  const Article = new Articles(data)

  return Article.save()
}

exports.queryAll = option => {
  return Articles.find()
    .skip((option.currentPage - 1) * option.showCount)
    .limit(option.showCount)
    .sort({'_id':-1})
    .exec()
}

exports.queryCount = () => Articles.count()