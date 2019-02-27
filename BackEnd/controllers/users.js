const { createUser } = require('../mongodb/proxy/users')
const _ = require('lodash')
const validator = require('../lib/validateSchema')

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
    await createUser(body)
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
