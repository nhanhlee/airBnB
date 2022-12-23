const Comment = require('../models/index').Comment
const User = require('../models/index').User
const Room = require('../models/index').Room
const { getDate } = require('../ultis/getDate')

let getComment = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Comment.findAll({
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

let postComment = async (body, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Comment.create({
                ...body,
                userId: userId,
                ngayBinhLuan: getDate()
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let updateComment = async (body, commentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Comment.update({ ...body, ngayBinhLuan: getDate() }, {
                where: {
                    id: commentId
                }
            });
            let data = await Comment.findOne({
                where: { id: commentId },
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['hash'] }
                    },
                    { model: Room }
                ],
                raw: true,
                nest: true
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let deleteComment = async (commentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Comment.destroy({
                where: {
                    id: commentId
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

let getCommentByRoom = async (roomId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Comment.findAll({
                where: { roomId },
                include: [{ model: User, attributes: { exclude: ['hash'] } }, { model: Room }],
                raw: true,
                nest: true
            })
            if (data.length > 0) {
                resolve(data)
            } else {
                resolve("Chưa Comment")
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getComment,
    postComment,
    updateComment,
    deleteComment,
    getCommentByRoom
}