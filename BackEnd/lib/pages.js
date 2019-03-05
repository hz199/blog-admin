const _ = require('lodash')

exports.parse = function parse (opts) {
  const options = _.pick(opts, [ 'currentPage', 'showCount' ])
  options.currentPage = parseInt(options.currentPage) || 1
  options.showCount = parseInt(options.showCount) || 10

  return _.defaults({}, options, {
    currentPage: 1,
    showCount: 10
  })
}
