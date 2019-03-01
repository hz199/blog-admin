
// exports.loginRequired = async function loginRequired (ctx, next) {
//   const { token } = ctx.request.body ?  ctx.query : ctx.request.body
//   console.log(token, 1111)
//   console.log(ctx.request.body, ctx.query, ctx.session.token,999999999)

//   if (!ctx.session.token || !token) {
//     ctx.throw(401, '您还未登录，请先登录后再进行访问。')
//     return
//   }
//   if (token !== ctx.session.token) {
//     ctx.session.token = null
//     ctx.throw(401, '您还未登录，请先登录后再进行访问。')
//     return
//   } else {
//     return next()
//   }
// }

exports.loginRequired = async function loginRequired (ctx, next) {
  if (!ctx.session.token) {
    ctx.throw(401, '您还未登录，请先登录后再进行访问。')
    return
  }
  if (ctx.method === 'POST') {
    const { token, ...params } = ctx.request.body
    if (token !== ctx.session.token) {
      ctx.throw(401, '您还未登录，请先登录后再进行访问。')
      return
    } else {
      ctx.request.body = params
      return next()
    }
  } else if (ctx.method === 'GET') {
    const { token, ...params } = ctx.query
    if (token !== ctx.session.token) {
      ctx.throw(401, '您还未登录，请先登录后再进行访问。')
      return
    } else {
      ctx.query = params
      return next()
    }
  }
  return next()
}
