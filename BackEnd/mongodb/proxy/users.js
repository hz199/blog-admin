const Users = require('../schema/Users')

exports.createUser = (data) => {
  const user = new Users(data)

  return user.save()
}

exports.queryUserCount = () => Users.find({}).count().exec()

exports.queryOneWithId = id => Users.findOne({ _id: id}).exec()

exports.queryOneWithEmail = email => Users.findOne({ email: email}).exec()
