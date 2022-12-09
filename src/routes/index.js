const express = require('express')
const rootRoute = express.Router();
const userRoute = require('./userRoute')
const authRoute = require('./authRoute')

rootRoute.use('/user', userRoute);
rootRoute.use('/auth', authRoute);

module.exports = rootRoute