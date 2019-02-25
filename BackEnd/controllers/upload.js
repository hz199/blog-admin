const {
  createReadStream
} = require('fs') //读取文件流
const {
  request
} = require('https') //请求接口数据

const option = {
  hostname: 'tinypng.com',
  port: 443,
  path: '/web/shrink',
  method: 'POST',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
  }
}

const uploadHandle = (filePath) => {
  return new Promise((resolve, reject) => {
    createReadStream(filePath).pipe(request(option, function (resp) {
      resp.on('data', function (resInfo) {
        resInfo = resInfo.toString()
        try {
          resInfo = JSON.parse(resInfo)
          resolve(resInfo)
        } catch (err) {
          reject(err)
        }
      })
    }))
  })
}

/**
 * 上传文件
 */
exports.upload = async function upload(ctx) {
  const {
    file
  } = ctx.request.files

  if (!file) {
    ctx.throw(400, '文件不存在，请重新上传')
    return
  }

  let result
  try {
    result = {
      success: true,
      data: await uploadHandle(file.path)
    }
  } catch (error) {
    result = {
      success: false,
      data: error
    }
  }

  ctx.body = result
}