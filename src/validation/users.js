const { body, param, query } = require('express-validator')
const User = require('../models/index').User;
const Constants = require('../config/constants')
const { isDate } = require('../ultis/getDate')
const moment = require("moment");

let postUser = [
    body('email')
        .exists()
        .withMessage('email không được trống.')
        .isEmail()
        .withMessage('Không đúng định dạng email.')
        .custom((value) => {
            return User.findOne({ where: { email: value }, raw: true }).then((item) => {
                if (item) {
                    return Promise.reject(value + ' tồn tại')
                }
            })
        }),
    body('password')
        .exists()
        .withMessage('password không được trống')
        .not()
        .isEmpty()
        .withMessage('password is not empty'),
    body('role')
        .exists()
        .withMessage('role không được trống')
        .custom((value) => Object.values(Constants.Role).indexOf(value) > -1)
        .withMessage('role không hợp lệ'),
    body('phone')
        .isInt()
        .withMessage('phone phải là kiểu number'),
    body('birthDay')
        .custom(value => isDate(value))
        .withMessage('Birth Day không hợp lệ.'),
    body('gender')
        .custom((value) => Object.values(Constants.Sex).indexOf(value) > -1)
        .withMessage('gender không hợp lệ')
]

let signup = [
    body('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .withMessage('Không đúng định dạng email.')
        .custom((value) => {
            return User.findOne({ where: { email: value }, raw: true }).then((item) => {
                if (item) {
                    return Promise.reject(value + ' tồn tại')
                }
            })
        }),
    body('password')
        .exists()
        .withMessage('password is required')
        .not()
        .isEmpty()
        .withMessage('password is not empty'),
    body('role')
        .optional()
        .custom((value) => Object.values(Constants.Role).indexOf(value) > -1)
        .withMessage('Invalid role')
]

let deleteUser = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id phải là kiểu INT')
        .custom((value) => {
            return User.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let pagination = [
    query('page').optional().isInt({ min: 1 }).withMessage('page không hợp lệ'),
    query('size').optional().isInt({ min: 1 }).withMessage('size không hợp lệ')
]

let getUser = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ')
        .custom((value) => {
            return User.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let updateUser = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id phải là kiểu INT')
        .custom((value) => {
            return User.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('email')
        .isEmail()
        .withMessage('Không đúng định dạng email.')
        .custom((value) => {
            return User.findOne({ where: { email: value }, raw: true }).then((item) => {
                if (item) {
                    return Promise.reject(value + ' tồn tại')
                }
            })
        }),
    body('role')
        .optional()
        .custom((value) => Object.values(Constants.Role).indexOf(value) > -1)
        .withMessage('Invalid role'),
    body('phone')
        .isInt()
        .withMessage('phone phải là kiểu number'),
    body('birthDay')
        .custom(value => isDate(value))
        .withMessage('Birth Day không hợp lệ.'),
    body('gender')
        .custom((value) => Object.values(Constants.Sex).indexOf(value) > -1)
        .withMessage('gender không hợp lệ')

]

let changePass = [
    body('oldPass').exists().withMessage('oldPass không được trống'),
    body('newPass').exists().withMessage('newPass không được trống'),
    body('confirmPass').exists().withMessage('confirmPass không được trống').custom((value, { req }) => value == req.body.newPass).withMessage('confirmPass không khớp.')
]

module.exports = {
    postUser,
    signup,
    deleteUser,
    pagination,
    getUser,
    updateUser,
    changePass
}
