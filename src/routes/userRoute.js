const express = require('express');
const userRoute = express.Router();
const userControllers = require('../controllers/users')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')
const fileControllers = require('../controllers/file')

userRoute.get('/', auth, userControllers.getAllUser)
userRoute.post('/', validation.users.postUser, validator, userControllers.postUser)
userRoute.delete('/:id', auth, validation.users.deleteUser, validator, userControllers.deleteUser)
userRoute.get('/pagination', auth, validation.users.pagination, validator, userControllers.pagination)
userRoute.get('/search/', userControllers.searchUser)
userRoute.put('/changePass', auth, validation.users.changePass, validator, userControllers.changePass)
userRoute.get('/:id', auth, validation.users.getUser, validator, userControllers.getUser)
userRoute.put('/:id', auth, validation.users.updateUser, validator, userControllers.updateUser)

userRoute.post('/uploadAvatar', auth, fileControllers.multipleUploadUser)

module.exports = userRoute