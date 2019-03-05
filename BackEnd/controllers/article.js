const articlesProxy = require('../mongodb/proxy/article')
const _ = require('lodash')
const validator = require('../lib/validateSchema')
const pages = require('../lib/pages')

exports.createArticle = async function createArticle (ctx) {
  const body = _.pick(ctx.request.body, ['title', 'describe', 'articleContent', 'tags', 'articleContentHtml'])

  const valid = validator({
    required: [ 'title', 'describe', 'articleContent', 'tags', 'articleContentHtml' ],
    properties: {
      title: {
        type: 'string',
        minLength: 1
      },
      describe: {
        type: 'string',
        minLength: 1
      },
      articleContent: {
        type: 'string',
        minLength: 1
      },
      articleContentHtml: {
        type: 'string',
        minLength: 1
      },
      tags: {
        type: 'array',
        minLength: 1
      }
    }
  }, body)

  if (!valid) {
    ctx.throw(400, '存在非法的请求参数')
    return
  }

  try {
    await articlesProxy.createArticle(body)
    ctx.body = {
      error: 0,
      result: null
    }
    return
  } catch (err) {
    ctx.throw(err.status || 400, err)
    return
  }
}

/**
 * 查找所有文章
 */
exports.findAllArticle = async function findAllArticle (ctx) {
  const pageOption = pages.parse(ctx.query)

  console.log(pageOption, 111111111111)

  let response

  try {
    response = {
      result: await articlesProxy.queryAll(pageOption),
      count: await articlesProxy.queryCount()
    }
    ctx.body = {
      error: 0,
      result: {
        articleList: response.result.map(item => {
          return {
            describe: item.describe,
            tags: item.tags,
            title: item.title,
            createAt: item.meta.createAt,
            id: item._id
          }
        }),
        pages: {
          countPage: response.count,
          ...pageOption
        }
      }
    }
    return
  } catch(err) {
    ctx.throw(err.status || 400, err)
    return
  }
}
