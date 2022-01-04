const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  id: String,
  nombre: String,
  categoria: String,
  path: String,
  precio: Number,
  cantidad: Number,
}, {
  versionKey: false,
  timestamps: true
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = CartModel