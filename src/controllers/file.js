const multer = require('multer')
const path = require('path')
const User = require('../models/index').User
const Room = require('../models/index').Room
const Location = require('../models/index').Location
const Constants = require('../config/constants')
const { successCode, failCode, errorCode } = require('../ultis/reponse')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, Constants.FileStorage.server.imageDirectory)
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

let upload = multer({ storage: storage }).single('image');

let multipleUploadUser = async function (req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return errorCode(res, error)
        } else if (err) {
            // An unknown error occurred when uploading.
            return errorCode(res, error)
        }
        if (req.file === undefined) {
            return failCode(res, "Chọn ít nhất 1 tệp.")
        }
        try {
            let imgURL = req.file.path
            let id = req.userId;
            await User.update({ "avatar": imgURL }, {
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
            successCode(res, data, "upload thành công");
        }
        catch (err) {
            errorCode(res, error)
        }

    })
}

let multipleUploadRoom = async function (req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return errorCode(res, error)
        } else if (err) {
            // An unknown error occurred when uploading.
            return errorCode(res, error)
        }
        if (req.file === undefined) {
            return failCode(res, "Chọn ít nhất 1 tệp.")
        }
        try {
            let imgURL = req.file.path
            let id = req.params.id;
            await Room.update({ "hinhAnh": imgURL }, {
                where: {
                    id
                }
            });
            let data = await Room.findOne({
                where: { id },
                raw: true,
                nest: true
            })
            successCode(res, data, "upload thành công");
        }
        catch (err) {
            errorCode(res, error)
        }

    })
}

let multipleUploadLocation = async function (req, res) {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return errorCode(res, error)
        } else if (err) {
            // An unknown error occurred when uploading.
            return errorCode(res, error)
        }
        if (req.file === undefined) {
            return failCode(res, "Chọn ít nhất 1 tệp.")
        }
        try {
            let imgURL = req.file.path
            let id = req.params.id;
            await Location.update({ "hinhAnh": imgURL }, {
                where: {
                    id
                }
            });
            let data = await Location.findOne({
                where: { id },
                raw: true,
                nest: true
            })
            successCode(res, data, "upload thành công");
        }
        catch (err) {
            errorCode(res, error)
        }

    })
}

module.exports = {
    multipleUploadUser,
    multipleUploadRoom,
    multipleUploadLocation
}
