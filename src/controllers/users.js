const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let getAllUser = async (req, res) => {
    try {
        let item = await service.users.getAllUser()
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let postUser = async (req, res) => {
    try {
        let item = await service.users.postUser(req.body)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let deleteUser = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.users.deleteUser(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let pagination = async (req, res) => {
    try {
        let item = await service.users.pagination(req.query)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let getUser = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.users.getUser(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let updateUser = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.users.updateUser(req.body, id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let changePass = async (req, res) => {
    try {
        let id = req.userId
        let item = await service.users.changePass(req.body, id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let searchUser = async (req, res) => {
    try {
        let item = await service.users.searchUser(req.query)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
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