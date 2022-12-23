const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let getAllLocation = async (req, res) => {
    try {
        let item = await service.locations.getAllLocation()
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let postLocation = async (req, res) => {
    try {
        let item = await service.locations.postLocation(req.body)
        return successCode(res, item, "Thêm thành công");
    } catch (error) {
        errorCode(res, error)
    }
}

let pagination = async (req, res) => {
    try {
        let item = await service.locations.pagination(req.query)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let getLocation = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.locations.getLocation(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let updateLocation = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.locations.updateLocation(req.body, id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let deleteLocation = async (req, res) => {
    try {
        let id = req.params.id
        let item = await service.locations.deleteLocation(id)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}


module.exports = {
    getAllLocation,
    postLocation,
    pagination,
    getLocation,
    updateLocation,
    deleteLocation
}