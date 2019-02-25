const pino = require('pino')
const config = require('config')

module.exports = function logger(name = 'default') {
  const logger = pino({
    name,
    prettyPrint: {
      colorize: true,
      translateTime: true,
      levelFirst: true
    }
  })
  const env = config.get('env')

  if (env === 'production') {
    logger.level = 'warn'
  } else {
    logger.level = config.get('app.debug') ? 'trace' : 'info'
  }

  return logger
}
