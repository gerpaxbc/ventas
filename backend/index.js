const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env)

require('./db/mongodb')
const PORT = 4000

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
