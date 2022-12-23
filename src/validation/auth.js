const { body, param, query } = require('express-validator')
const db = require('../models/index');
const User = db.User
const Constants = require('../config/constants')

let signup = [
    body('email')
        .exists()
        .withMessage('email không được trống')
        .isEmail()
        .withMessage('Email không đúng định dạng.')
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
    body('role').optional().custom((value) => Object.values(Constants.Role).indexOf(value) > -1).withMessage('Invalid role')
]

let signin = [
    body('email')
        .exists()
        .withMessage('email không được trống')
        .isEmail()
        .withMessage('Email không đúng định dạng.')
        .custom((value) => {
            return User.findOne({ where: { email: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('password')
        .exists()
        .withMessage('password không được trống')
        .not()
        .isEmpty()
        .withMessage('password is not empty')
]

module.exports = {
    signup,
    signin
}