const express = require('express');
const commentRoute = express.Router();
const commentControllers = require('../controllers/comments')
const validation = require('../validation/index')
const validator = require('../middlewares/validator')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')

commentRoute.get('/', auth, commentControllers.getComment)
commentRoute.post('/', auth, validation.comments.postComment, validator, commentControllers.postComment)
commentRoute.put('/:id', auth, validation.comments.updateComment, validator, commentControllers.updateComment)
commentRoute.delete('/:id', auth, validation.comments.deleteComment, validator, commentControllers.deleteComment)
commentRoute.get('/getCommentByRoom/:roomId', validation.comments.getCommentByRoom, validator, auth, commentControllers.getCommentByRoom)


module.exports = commentRoute