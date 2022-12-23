const User = require('../models/index').User
const Order = require('../models/index').Order
const Comment = require('../models/index').Comment
const moment = require("moment");
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const _ = require('lodash');
const { Op } = require("sequelize");

let getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await User.findAll({ attributes: { exclude: ['hash'] }, raw: true, nest: true })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let postUser = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordBcr = await bcrypt.hashSync(body.password, salt);
            let birthDay = moment(body.birthDay, "DD-MM-YYYY").toDate();
            let data = await User.create({
                ...body,
                hash: hashPasswordBcr,
                birthDay,
                attributes: { exclude: ['hash'] }
            })
            resolve("Thêm thành công.")
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Order.destroy({
                where: {
                    userId: id
                }
            });
            await Comment.destroy({
                where: {
                    userId: id
                }
            });
            let data = await User.destroy({
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
let pagination = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const page = query.page ? parseInt(query.page) : 1
            const size = query.size ? parseInt(query.size) : 10
            let data = await User.findAndCountAll({
                limit: size,
                offset: (page - 1) * size,
                attributes: { exclude: ['hash'] }
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await User.findOne({
                where: { id },
                attributes: { exclude: ['hash'] },
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let edit = async (item, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await User.update(item, {
                where: {
                    id
                }
            });
            let data = await User.findOne({
                where: { id },
                attributes: { exclude: ['hash'] },
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let updateUser = async (body, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let item = _.pick(body, ["name", "email", "phone", "birthDay", "gender", "role"])
            if (body.birthDay) {
                item.birthDay = moment(body.birthDay, "DD-MM-YYYY").toDate();
                let result = edit(item, id)
                resolve(result)
            } else {
                let result = edit(item, id)
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let searchUser = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { q } = query
            let data = await User.findAll({
                where: {
                    "name": {
                        [Op.like]: '%' + q + '%'
                    }
                },
                attributes: { exclude: ['hash'] },
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let changePass = async (body, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findOne({ where: { id }, raw: true, nest: true })
            if (bcrypt.compareSync(body.oldPass, user.hash)) {
                await User.update({ hash: bcrypt.hashSync(body.newPass, 10) }, {
                    where: {
                        id
                    }
                });
                await User.findOne({
                    where: { id },
                    attributes: { exclude: ['hash'] }
                })
                resolve("Đổi mật khẩu thành công")
            } else {
                resolve("Mật khẩu cũ không đúng")
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllUser,
    postUser,
    deleteUser,
    pagination,
    getUser,
    updateUser,
    searchUser,
    changePass
}