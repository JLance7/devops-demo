require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.set('strictQuery', false)
const routes = require('./routes/endpoints')
//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const express_port = process.env.EXPRESS_SERVER_PORT ? process.env.EXPRESS_SERVER_PORT : 2000
const mongo_url_local = 'mongodb://localhost:1000/'
const mongo_url_docker = `mongodb://mongo:1000/`

mongoose.connect(mongo_url_local, {useNewUrlParser: true}, err => {
  if (err) console.log(err)
  else {
    console.log('connected to db')
  }
})

app.listen(express_port, (req, res) => {
  console.log(`listening on port ${express_port}`)

  
})

app.use('/', routes)