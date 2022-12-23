
const express = require('express');
const authRoute = express.Router();
const auth = require('../controllers/auth')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')

authRoute.post('/signup', validation.auth.signup, validator, auth.signup)
authRoute.post('/signin', validation.auth.signin, validator, auth.signin)

module.exports = authRoute