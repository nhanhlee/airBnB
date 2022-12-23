const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const db = require('../models/index');
const jwt = require('jsonwebtoken');
const Constants = require('../config/constants')


let User = db.User
let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let signup = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordBcr = await hashPassword(body.password);
            let data = await User.create({
                ...body,
                hash: hashPasswordBcr
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let signin = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findOne({ where: { email: body.email }, raw: true })
            if (bcrypt.compareSync(body.password, user.hash)) {
                const token = jwt.sign({ id: user.id, role: user.role }, Constants.JWTSecret)
                resolve(token)
            }
            else {
                reject('Password bị sai')
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    signup,
    signin
}