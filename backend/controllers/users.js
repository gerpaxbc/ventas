const UsersModel = require('../models/users')
const bcrypt = require('bcryptjs')

const getUser = async (email) => {
  return UsersModel.findOne({email})
}

const createUser = async (body) => {
  const pw = body.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(pw, salt)
  body.password = hash
  
  const newUser = new UsersModel(body)

  await newUser.save()
  return newUser
}

const updateUser = async (email, updateObject) => {
  return UsersModel.findOneAndUpdate({ email }, updateObject, {
    upsert: false,
    new: true
  })
}

const removeUser = async (email) => {
  return UsersModel.findOneAndDelete({ email })
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  removeUser
}