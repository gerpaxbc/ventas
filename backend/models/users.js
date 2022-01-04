const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: String,
  estado: String,
  celular: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  permissions: [{
    type: String,
    required: true
  }],
  password: {
    type: String
  },
  comentarios: String,
}, {
  versionKey: false,
  timestamps: true
})

userSchema.methods.toSimple = function () {
  const { password, ... restUser } = this.toSimple
  return restUser
}

const UsersModel = mongoose.model('Usuarios', userSchema)

module.exports = UsersModel