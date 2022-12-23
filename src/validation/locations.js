const { body, param, query } = require('express-validator')
const Location = require('../models/index').Location;

let postLocation = [
    body('tenViTri')
        .exists()
        .withMessage('tenViTri không được trống'),
    body('tinhThanh')
        .exists()
        .withMessage('tinhThanh không được trống'),
    body('quocGia')
        .exists()
        .withMessage('quocGia không được trống')
]

let pagination = [
    query('page').optional().isInt({ min: 1 }).withMessage('page không hợp lệ'),
    query('size').optional().isInt({ min: 1 }).withMessage('size không hợp lệ')
]

let getLocation = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Location.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let deleteLocation = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ.')
        .custom((value) => {
            return Location.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

module.exports = {
    postLocation,
    pagination,
    getLocation,
    deleteLocation
}