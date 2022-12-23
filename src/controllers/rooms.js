const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let getAllRoom = async (req, res) => {
    try {
        let item = await service.rooms.getAllRoom()
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let postRoom = async (req, res) => {
    try {
        let item = await service.rooms.postRoom(req.body)
        return successCode(res, item, "Thêm thành công");
    } catch (error) {
        errorCode(res, error)
    }
}

let pagination = async (req, res) => {
    try {
        let item = await service.rooms.pagination(req.query)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let getRoom = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.rooms.getRoom(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let updateRoom = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.rooms.updateRoom(req.body, id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let deleteRoom = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.rooms.deleteRoom(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

module.exports = {
    getAllRoom,
    postRoom,
    pagination,
    getRoom,
    updateRoom,
    deleteRoom
}
