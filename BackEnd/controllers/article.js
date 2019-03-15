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

  const { _id } = ctx.request.body

  try {
    if (_id) {
      await articlesProxy.updateArticleById(_id, body)
    } else {
      await articlesProxy.createArticle(body)
    }
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
  const body = _.pick(ctx.query, ['tag'])

  let params = body.tag ? { tags: {$regex: body.tag}} : {}

  let response

  try {
    response = {
      result: await articlesProxy.queryAll(pageOption, params),
      count: await articlesProxy.queryCount(params)
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
          ...pageOption,
          totalPage: Math.ceil(response.count / pageOption.showCount)
        }
      }
    }
    return
  } catch(err) {
    ctx.throw(err.status || 400, err)
    return
  }
}

// 查询当前某一篇文章
exports.findOneArticle = async function findOneArticle (ctx) {
  const { id } = ctx.params

  if (!id) {
    ctx.throw(400, '存在非法请求参数')
    return
  }

  let response

  try {
    response = await articlesProxy.queryOneWithId(id)
    ctx.body = {
      code: 0,
      result: response
    }
  } catch (err) {
    ctx.throw(err.status || 400, err)
    return
  }
}

// 删除当前某一篇文章
exports.deleteArticle = async function deleteArticle (ctx) {
  const { id } = ctx.params

  if (!id) {
    ctx.throw(400, '存在非法请求参数')
    return
  }

  try {
    await articlesProxy.deleteWithId(id)
    ctx.body = {
      code: 0,
      result: null
    }
    return
  } catch (err) {
    ctx.throw(err.status || 400, err)
    return
  }
}
