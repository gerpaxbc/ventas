const mongoose = require('mongoose')

const url = process.env.MONGO_DB_URL

mongoose.connect(url, {}, () => {
  console.log('----------------------')
  console.log('Connected...')
  console.log('----------------------')
})

module.exports = mongoose
