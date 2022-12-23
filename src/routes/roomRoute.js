const express = require('express');
const roomRoute = express.Router();
const roomControllers = require('../controllers/rooms')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')
const fileControllers = require('../controllers/file')

roomRoute.get('/', auth, roomControllers.getAllRoom)
roomRoute.post('/', auth, validation.rooms.postRoom, validator, roomControllers.postRoom)
roomRoute.get('/pagination', auth, validation.rooms.pagination, validator, roomControllers.pagination)
roomRoute.get('/:id', auth, validation.rooms.getRoom, validator, roomControllers.getRoom)
roomRoute.put('/:id', auth, validation.rooms.updateRoom, validator, roomControllers.updateRoom)
roomRoute.delete('/:id', auth, validation.rooms.deleteRoom, validator, roomControllers.deleteRoom)
roomRoute.post('/uploadRoom/:id', auth, fileControllers.multipleUploadRoom)

module.exports = roomRoute;