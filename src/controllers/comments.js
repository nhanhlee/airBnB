const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let getComment = async (req, res) => {
    try {
        let item = await service.comments.getComment()
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let postComment = async (req, res) => {
    try {
        let userId = req.userId
        let item = await service.comments.postComment(req.body, userId)
        return successCode(res, item, "Thêm bình luận thành công");
    } catch (error) {
        errorCode(res, error)
    }
}

let updateComment = async (req, res) => {
    try {
        let commentId = req.params.id
        let item = await service.comments.updateComment(req.body, commentId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let deleteComment = async (req, res) => {
    try {
        let commentId = req.params.id
        let item = await service.comments.deleteComment(commentId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

let getCommentByRoom = async (req, res) => {
    try {
        let roomId = req.params.roomId
        let item = await service.comments.getCommentByRoom(roomId)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}

module.exports = {
    getComment,
    postComment,
    updateComment,
    deleteComment,
    getCommentByRoom
}