const { body, param, query } = require('express-validator')
const Room = require('../models/index').Room;

let postRoom = [
    body('maPhong')
        .exists()
        .withMessage('maPhong không được trống')
        .custom((value) => {
            return Room.findOne({ where: { maPhong: value }, raw: true }).then((item) => {
                if (item) {
                    return Promise.reject(value + ' đã tồn tại')
                }
            })
        }),
    body('soNguoi')
        .exists()
        .withMessage('soNguoi không được trống')
        .isInt({ min: 1 })
        .withMessage('soNguoi không hợp lệ'),
    body('phongNgu')
        .exists()
        .withMessage('phongNgu không được trống')
        .isInt({ min: 1 })
        .withMessage('phongNgu không hợp lệ'),
    body('giuong')
        .exists()
        .withMessage('giuong không được trống')
        .isInt({ min: 1 })
        .withMessage('giuong không hợp lệ'),
    body('phongTam')
        .exists()
        .withMessage('phongTam không được trống')
        .isInt({ min: 1 })
        .withMessage('phongTam không hợp lệ'),
    body('giaTien')
        .exists()
        .withMessage('giaTien không được trống')
        .isInt()
        .withMessage('giaTien phải là kiểu INT'),
    body('mayGiat')
        .exists()
        .withMessage('mayGiat không được trống'),
    body('banLa')
        .exists()
        .withMessage('banLa không được trống'),
    body('tivi')
        .exists()
        .withMessage('tivi không được trống'),
    body('dieuHoa')
        .exists()
        .withMessage('dieuHoa không được trống'),
    body('wifi')
        .exists()
        .withMessage('wifi không được trống'),
    body('bep')
        .exists()
        .withMessage('bep không được trống'),
    body('doXe')
        .exists()
        .withMessage('doXe không được trống'),
    body('hoBoi')
        .exists()
        .withMessage('hoBoi không được trống')

]

let pagination = [
    query('page').optional().isInt({ min: 1 }).withMessage('page không hợp lệ'),
    query('size').optional().isInt({ min: 1 }).withMessage('size không hợp lệ')
]

let getRoom = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

let updateRoom = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        }),
    body('maPhong')
        .custom((value) => {
            return Room.findOne({ where: { maPhong: value }, raw: true }).then((item) => {
                if (item) {
                    return Promise.reject(value + ' đã tồn tại')
                }
            })
        }),
    body('soNguoi')
        .isInt({ min: 1 })
        .withMessage('soNguoi không hợp lệ'),
    body('phongNgu')
        .isInt({ min: 1 })
        .withMessage('phongNgu không hợp lệ'),
    body('giuong')
        .isInt({ min: 1 })
        .withMessage('giuong không hợp lệ'),
    body('phongTam')
        .isInt({ min: 1 })
        .withMessage('phongTam không hợp lệ'),
    body('giaTien')
        .isInt()
        .withMessage('giaTien phải là kiểu INT'),

]

let deleteRoom = [
    param('id')
        .exists()
        .withMessage('id không được trống')
        .isInt({ min: 1 })
        .withMessage('id không hợp lệ')
        .custom((value) => {
            return Room.findOne({ where: { id: value }, raw: true }).then((item) => {
                if (!item) {
                    return Promise.reject(value + ' không tồn tại')
                }
            })
        })
]

module.exports = {
    postRoom,
    pagination,
    getRoom,
    updateRoom,
    deleteRoom
}