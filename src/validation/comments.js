const { body, param, query } = require('express-validator')
const Room = require('../models/index').Room;
const Comment = require('../models/index').Comment;

let postComment = [
    body('roomId')
        .exists()
        .withMessage('roomId không được trống')
        .isInt({ min: 1 })
        .withMessage('roomId không hợp lệ.')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject('roomId ' + value + ' không tồn tại')
                }
            })
        }),
    body('noiDung')
        .exists()
        .withMessage('Nội dung không được trống'),
    body('saoBinhLuan')
        .exists()
        .withMessage('Sao bình luận không được trống')
        .isInt({ min: 1 })
        .withMessage('Sao bình luận không hợp lệ.')
        .isIn([1, 2, 3, 4, 5])
        .withMessage('Sao bình luận phải là số từ 1 đến 5')
]

let updateComment = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Comment.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('saoBinhLuan')
        .isInt({ min: 1 })
        .withMessage('Sao bình luận không hợp lệ.')
        .isIn([1, 2, 3, 4, 5])
        .withMessage('Sao bình luận phải là số từ 1 đến 5')
]

let deleteComment = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Comment.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let getCommentByRoom = [
    param('roomId')
        .exists()
        .withMessage('roomId không được trống')
        .isInt({ min: 1 })
        .withMessage('roomId không hợp lệ.')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]
module.exports = {
    postComment,
    updateComment,
    deleteComment,
    getCommentByRoom
}