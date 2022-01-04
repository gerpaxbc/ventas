const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: String,
  path: String,
  precio: Number,
  existencias: Number,
}, {
  versionKey: false,
  timestamps: true
})

const ProductModel = mongoose.model('Productos', productSchema)

module.exports = ProductModel
