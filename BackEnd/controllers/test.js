/**
 * 测试
 */
exports.Test = async function Test(ctx) {
  console.log(ctx.request.body)
  ctx.body = {
    code: 0
  }
}
