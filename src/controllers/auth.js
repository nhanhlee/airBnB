const service = require('../services/index')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

let signup = async (req, res) => {
    try {
        await service.auth.signup(req.body)
        return successCode(res, "đã đăng ký thành công");
    } catch (error) {
        errorCode(res, error)
    }
}

let signin = async (req, res) => {
    try {
        let item = await service.auth.signin(req.body)
        return successCode(res, item);
    } catch (error) {
        errorCode(res, error)
    }
}


module.exports = {
    signup,
    signin
}