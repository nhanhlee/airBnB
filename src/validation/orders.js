const { body, param, query } = require('express-validator')
const Room = require('../models/index').Room;
const Order = require('../models/index').Order;
const User = require('../models/index').User;
const moment = require("moment");
const { isDate } = require('../ultis/getDate')

let postOrder = [
    body('roomId')
        .exists()
        .withMessage('roomId không được trống')
        .isInt({ min: 1 })
        .withMessage('roomId không hợp lệ')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('ngayDen')
        .exists()
        .withMessage('Ngày đến không được trống')
        .custom(value => isDate(value))
        .withMessage('Ngày đến không hợp lệ'),
    body('ngayDi')
        .exists()
        .withMessage('Ngày đi không được trống')
        .custom(value => isDate(value))
        .withMessage('Ngày đi không hợp lệ')
        .custom((value, { req }) => moment(value, "DD-MM-YYYY").toDate() - moment(req.body.ngayDen, "DD-MM-YYYY").toDate() > 0)
        .withMessage('Ngày đi không đúng.'),
    body('soLuongKhach')
        .exists()
        .withMessage('Số lượng khách không được trống')
        .isInt({ min: 1 })
        .withMessage('Số lượng khách không hợp lệ.')
]

let getOrderId = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Order.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let updateOrder = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Order.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('ngayDen')
        .custom(value => isDate(value))
        .withMessage('Ngày đến không hợp lệ'),
    body('ngayDi')
        .custom(value => isDate(value))
        .withMessage('Ngày đi không hợp lệ')
        .custom((value, { req }) => moment(value, "DD-MM-YYYY").toDate() - moment(req.body.ngayDen, "DD-MM-YYYY").toDate() > 0)
        .withMessage('Ngày đi không đúng.'),
    body('soLuongKhach')
        .isInt({ min: 1 })
        .withMessage('Số lượng khách không hợp lệ.'),
    body('roomId')
        .isInt({ min: 1 })
        .withMessage('roomId không hợp lệ.')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),

]

let deleteOrder = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Order.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let getOrderByUser = [
    param('userId')
        .exists()
        .withMessage('userId không được trống')
        .isInt({ min: 1 })
        .withMessage('userId không hợp lệ.')
        .custom((value) => {
            return User.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

module.exports = {
    postOrder,
    getOrderId,
    updateOrder,
    deleteOrder,
    getOrderByUser
}
