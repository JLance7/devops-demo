require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send({'response': 'hi'})
})

const express_port = process.env.EXPRESS_SERVER_PORT ? process.env.EXPRESS_SERVER_PORT : 2000
const mongo_url = process.env.ME_CONFIG_MONGODB_URL ? process.env.ME_CONFIG_MONGODB_URL : 'mongodb://root:password@mongo:1000/'

app.listen(express_port, {useNewUrlParser: true}, (req, res) => {
  console.log(`\n\nlistening on port ${express_port}\n\n`)
  console.log('mongo_url:', mongo_url)

  mongoose.connect(mongo_url, err => {
    if (err) console.log(err)
    else {
      console.log('connected to db')
    }
  })
})