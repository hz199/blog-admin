const jwt = require('jsonwebtoken')

exports.createToken  = (payload, key) => {
  return jwt.sign(payload, key)
} 
