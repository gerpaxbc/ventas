const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { cartController } = require('../controllers')
const { getCart, addCart, removeCart } = cartController

router.get('/:email', async (req, res) => {
  const { email} = req.params
  const cart = await getCart(email)

  if (!cart) {
    res.status(404)
    return res.send({
      message: `Cart: ${email} not found`
    })
  }
  return res.send(cart)
})

router.post('/', async (req, res) => {
  const body = req.body

  try {
    const newCart = await addCart(body)
    res.status(201)
    res.send(newCart)
    
  } catch (err) {
    console.error(err)

    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params

  const result = await removeCart(_id)
  res.send(result)
})

module.exports = router
