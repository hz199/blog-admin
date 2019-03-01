const usersProxy = require('../mongodb/proxy/users')
const { createToken } = require('../lib/jwt')
const _ = require('lodash')
const validator = require('../lib/validateSchema')
const MD5 = require('md5')

/**
 * 注册
 * @param
 */
exports.register = async function register (ctx) {
  const body = _.pick(ctx.request.body, ['userName', 'password', 'email'])

  const valid = validator({
    required: [ 'userName', 'password', 'email' ],
    properties: {
      userName: {
        type: 'string',
        minLength: 1
      },
      password: {
        type: 'string',
        minLength: 1
      },
      email: {
        type: 'string',
        minLength: 1
      }
    }
  }, body)

  if (!valid) {
    ctx.throw(400, '存在非法的请求参数')
    return
  }

  try {
    body.password = MD5(body.password)
    await usersProxy.createUser(body)
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
 * 登录
 * @param
 */
exports.login = async function login (ctx) {
  const body = _.pick(ctx.request.body, ['userName', 'password', 'email'])

  const valid = validator({
    required: [ 'userName', 'password', 'email' ],
    properties: {
      userName: {
        type: 'string',
        minLength: 1
      },
      password: {
        type: 'string',
        minLength: 1
      },
      email: {
        type: 'string',
        minLength: 1
      }
    }
  }, body)

  if (!valid) {
    ctx.throw(400, '存在非法的请求参数')
    return
  }

  let userInfo

  try {
    // 查找用户信息
    userInfo = await usersProxy.queryOneWithEmail(body.email)
    if (MD5(body.password) === userInfo.password) {
      const token = createToken({userName: body.userName}, body.email)

      ctx.session.token = token
      ctx.session.userId = userInfo._id
      ctx.body = {
        error: 0,
        token,
        result: {
          userId: userInfo._id || '',
          userName: userInfo.userName || ''
        }
      }
      return
    }
  } catch (err) {
    ctx.throw(err.status || 400, err)
    return
  }
}

/**
 * 获取当前用户的信息
 * @param
 */
exports.findUserInfo = async function findUserInfo (ctx) {
  let userInfo
  const userId = ctx.session.userId

  try {
    userInfo = await usersProxy.queryOneWithId(userId)

    ctx.body = {
      error: 0,
      result: userInfo
    }
    return
  } catch(err) {
    ctx.throw(err.status || 400, err)
    return
  }
}
