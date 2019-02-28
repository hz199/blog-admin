
exports.loginRequired = async function loginRequired (ctx, next) {
  console.log(ctx.request.body)
  if (!ctx.session.token) {
    ctx.throw(401, '您还未登录，请先登录后再进行访问。')
    return
  }
  if (ctx.method === 'POST') {
    const { token, ...params } = ctx.request.body
    if (token !== ctx.session.token) {
      ctx.session.token = null
      ctx.throw(401, '您还未登录，请先登录后再进行访问。')
      return
    } else {
      ctx.request.body = params
      return next()
    }
  } else if (ctx.method === 'GET') {
    const { token, ...params } = ctx.query
    if (token !== ctx.session.token) {
      ctx.session.token = null
      ctx.throw(401, '您还未登录，请先登录后再进行访问。')
      return
    } else {
      ctx.query = params
      return next()
    }
  }
  return next()
}
