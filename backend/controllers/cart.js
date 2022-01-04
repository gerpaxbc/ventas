const CartModel = require('../models/cart')

const getCart = async (email) => {
  return CartModel.find({email})
}

const addCart = async (body) => {
  const newCart = new CartModel(body)

  await newCart.save()
  return newCart
}

const removeCart = async (_id ) => {
  return CartModel.findOneAndDelete({_id: _id })
}

module.exports = {
    getCart,
    addCart,
    removeCart
}