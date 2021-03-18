const express = require('express')

const supermarketController = require('../controllers/supermarket.controlleur')
const Router = express.Router()

Router.get('/all', supermarketController.getAllSupermarket)

module.exports=Router