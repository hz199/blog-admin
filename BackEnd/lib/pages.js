const _ = require('lodash')

exports.parse = function parse (opts) {
  const options = _.pick(opts, [ 'currentPage', 'showCount' ])

  return _.defaults({}, options, {
    currentPage: 1,
    showCount: 10
  })
}
