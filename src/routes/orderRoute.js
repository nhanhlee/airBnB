const express = require('express');
const orderRoute = express.Router();
const orderControllers = require('../controllers/orders')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')

orderRoute.get('/', auth, orderControllers.getAllOrder)
orderRoute.post('/', auth, validation.orders.postOrder, validator, orderControllers.postOrder)
orderRoute.get('/:id', auth, validation.orders.getOrderId, validator, orderControllers.getOrder)
orderRoute.put('/:id', auth, validation.orders.updateOrder, validator, orderControllers.updateOrder)
orderRoute.delete('/:id', auth, validation.orders.deleteOrder, validator, orderControllers.deleteOrder)
orderRoute.get('/getOrderByUser/:userId', auth, validation.orders.getOrderByUser, validator, orderControllers.getOrderByUser)

module.exports = orderRoute