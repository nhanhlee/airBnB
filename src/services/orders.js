const Order = require('../models/index').Order;
const User = require('../models/index').User
const Room = require('../models/index').Room
const moment = require("moment");

let getAllOrder = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Order.findAll({
                include: [{ model: User, attributes: { exclude: ['hash'] } }, { model: Room }],
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let postOrder = async (body, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ngayDen = moment(body.ngayDen, "DD-MM-YYYY").toDate();
            let ngayDi = moment(body.ngayDi, "DD-MM-YYYY").toDate();
            let data = await Order.create({
                ...body,
                userId,
                ngayDen,
                ngayDi
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getOrder = async (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Order.findOne({
                where: { id: orderId },
                include: [{ model: User, attributes: { exclude: ['hash'] } }, { model: Room }],
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let updateOrder = async (body, orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ngayDen = moment(body.ngayDen, "DD-MM-YYYY").toDate();
            let ngayDi = moment(body.ngayDi, "DD-MM-YYYY").toDate();
            await Order.update({ ...body, ngayDen, ngayDi }, {
                where: {
                    id: orderId
                }
            });
            let data = await Order.findOne({
                where: { id: orderId },
                include: [{ model: User, attributes: { exclude: ['hash'] } }, { model: Room }],
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let deleteOrder = async (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Order.destroy({
                where: {
                    id: orderId
                }
            });
            if (data == 1) {
                resolve("Đã xoá thành công")
            }
            else {
                resolve("Không tìm thấy dự liệu!")
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getOrderByUser = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Order.findAll({
                where: { userId },
                include: [{ model: User, attributes: { exclude: ['hash'] } }, { model: Room }],
                raw: true,
                nest: true
            })
            if (data.length > 0) {
                resolve(data)
            } else {
                resolve("Chưa Order.")
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllOrder,
    postOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    getOrderByUser
}