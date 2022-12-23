const express = require('express');
const locationRoute = express.Router();
const locationControllers = require('../controllers/locations')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')
const fileControllers = require('../controllers/file')

locationRoute.get('/', auth, locationControllers.getAllLocation)
locationRoute.post('/', auth, validation.locations.postLocation, validator, locationControllers.postLocation)
locationRoute.get('/pagination', auth, validation.locations.pagination, validator, locationControllers.pagination)
locationRoute.get('/:id', auth, validation.locations.getLocation, validator, locationControllers.getLocation)
locationRoute.put('/:id', auth, locationControllers.updateLocation)
locationRoute.delete('/:id', auth, validation.locations.deleteLocation, validator, locationControllers.deleteLocation)
locationRoute.post('/uploadLocation/:id', auth, fileControllers.multipleUploadLocation)

module.exports = locationRoute
