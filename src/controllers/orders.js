const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let getAllOrder = async (req, res) => {
    try {
        let item = await service.orders.getAllOrder()
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let postOrder = async (req, res) => {
    try {
        let userId = req.userId
        let item = await service.orders.postOrder(req.body, userId)
        return successCode(res, item, "Đặt phòng thành công");
    } catch (error) {
        errorCode(res, error)
    }
}

let getOrder = async (req, res) => {
    try {
        let orderId = req.params.id
        let item = await service.orders.getOrder(orderId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let updateOrder = async (req, res) => {
    try {
        let orderId = req.params.id
        let item = await service.orders.updateOrder(req.body, orderId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let deleteOrder = async (req, res) => {
    try {
        let orderId = req.params.id
        let item = await service.orders.deleteOrder(orderId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let getOrderByUser = async (req, res) => {
    try {
        let userId = req.params.userId
        let item = await service.orders.getOrderByUser(userId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

module.exports = {
    getAllOrder,
    postOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    getOrderByUser
}