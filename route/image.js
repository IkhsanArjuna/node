const express = require('express')
const imageController = require('../controller/image')

const route = express.Router()

route.post('/',imageController.uploadImage)

module.exports = route