const express = require('express')
const router = express.Router()
const { getApi } = require('../controllers')

router.get('/', getApi)

module.exports = router
