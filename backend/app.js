require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')

mongoose
  .connect(process.env.DB || 'mongodb://localhost/useless-facts', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)

const app = express()

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080'
  })
)

const index = require('./routes/index')
app.use('/', index)

module.exports = app
