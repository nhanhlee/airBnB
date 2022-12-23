const express = require('express')
const rootRoute = express.Router();

const userRoute = require('./userRoute')
const authRoute = require('./authRoute')
const commentRoute = require('./commentRoute')
const orderRoute = require('./orderRoute')
const roomRoute = require('./roomRoute')
const locationRoute = require('./locationRoute')

rootRoute.use('/user', userRoute);
rootRoute.use('/auth', authRoute);
rootRoute.use('/comment', commentRoute);
rootRoute.use('/order', orderRoute);
rootRoute.use('/room', roomRoute);
rootRoute.use('/location', locationRoute);

module.exports = rootRoute