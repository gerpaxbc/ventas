const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { usersController } = require('../controllers')
const { getUser, createUser, updateUser, removeUser } = usersController

router.post('/email', async (req, res) => {
  const { email, password } = req.body
  const user = await getUser(email)
  
  if (!user) {
      return res.status(401).send({
        message: 'usuario o contraseña inválida' 
      })
  }
  
  const isOk = bcrypt.compareSync(password, user.password)
  if (!isOk) {
    return res.status(401).send({
      message: 'usuario o contraseña inválida' 
    })
  }

  const tokenSecret = process.env.TOKEN_SECRET
  const token = jwt.sign( user.toSimple(), tokenSecret)
  return res.send({
    token: token,
    user: user.nombre,
    email: user.email,
    permissions: user.permissions
  })
})

router.post('/', async (req, res) => {
  const body = req.body

  try {
    const newUser = await createUser(body)
    res.status(201)
    res.send(newUser)

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

router.put('/:email', async (req, res) => {
  const { id } = req.params
  const body = req.body

  const user = await updateUser(id, body)

  if (!user) {
    res.status(404)
    return res.send({
      message: `User ${email} not found`
    })
  }

  res.send(user)
})

router.delete('/:email', async (req, res) => {
  const { email } = req.params

  const result = await removeUser(id)

  res.send(result)
})

module.exports = router
