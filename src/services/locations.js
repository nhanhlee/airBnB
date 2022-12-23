const Location = require('../models/index').Location;

let getAllLocation = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Location.findAll({ raw: true, nest: true })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let postLocation = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Location.create({
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
            let data = await Location.findAndCountAll({
                limit: size,
                offset: (page - 1) * size,
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getLocation = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Location.findOne({
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

let updateLocation = async (body, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Location.update({ ...body }, {
                where: {
                    id
                }
            });
            let data = await Location.findOne({
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

let deleteLocation = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Location.destroy({
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
    getAllLocation,
    postLocation,
    pagination,
    getLocation,
    updateLocation,
    deleteLocation
}