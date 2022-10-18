const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config({ path: './.env.exemplo' })
const port = process.env.PORT
const router = require('./router/router.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port, err => {
  if (err) {
    console.error(err.message)
  } else {
    console.error(`Servidor Iniciado na url http://localhost:${port}`)
  }
}) //() => console.log(`Servidor Iniciado na porta ${port}`))

/*app.listen(port, err => {
  if (err) {
    console.error(err.message)
  } else {
    console.error(`http://localhost:${port}`)
  }
})*/
