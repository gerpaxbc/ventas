const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { productsController } = require('../controllers')
const { getProducts, getProductById, createProduct, updateProduct, removeProduct } = productsController

router.get('/:categoria', async (req, res) => {
  const { categoria } = req.params
  const products = await getProducts(categoria)
  res.send(products)
})

router.get('/id/:_id', async (req, res) => {
  const { _id } = req.params
  const product = await getProductById(_id)

  if (!product) {
    res.status(404)
    return res.send({
      message: `Product: ${_id} not found`
    })
  }
  return res.send(product)
})

router.post('/', async (req, res) => {
  const body = req.body

  try {
    const newProduct = await createProduct(body)

    res.status(201)

    res.send(newProduct)
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

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body

  const product = await updateProduct(id, body)

  if (!product) {
    res.status(404)
    return res.send({
      message: `Product ${id} not found`
    })
  }

  res.send(product)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await removeProduct(id)

  res.send(result)
})

module.exports = router
