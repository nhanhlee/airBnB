const Room = require('../models/index').Room
const Order = require('../models/index').Order
const Comment = require('../models/index').Comment

let getAllRoom = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Room.findAll({ raw: true, nest: true })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let postRoom = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Room.create({
                ...body
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let pagination = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const page = query.page ? parseInt(query.page) : 1
            const size = query.size ? parseInt(query.size) : 10
            let data = await Room.findAndCountAll({
                limit: size,
                offset: (page - 1) * size,
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getRoom = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Room.findOne({
                where: { id },
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let updateRoom = async (body, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Room.update({ ...body }, {
                where: {
                    id
                }
            });
            let data = await Room.findOne({
                where: { id },
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let deleteRoom = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Order.destroy({
                where: {
                    roomId: id
                }
            });
            await Comment.destroy({
                where: {
                    roomId: id
                }
            });
            let data = await Room.destroy({
                where: {
                    id
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


module.exports = {
    getAllRoom,
    postRoom,
    pagination,
    getRoom,
    updateRoom,
    deleteRoom
}