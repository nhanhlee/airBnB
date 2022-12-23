const passport = require('passport')
const Constants = require('../config/constants')

module.exports = function (req, res, next) {
    passport.authenticate('Bearer', function (err, user, info) {
        if (err) return res.status(500).send(err)
        if (user) {
            if (user.role == Constants.Role.User || user.role == Constants.Role.Admin) {
                req.userId = user.id
                req.userInfo = user
                next()
            } else {
                res.status(401).json({ message: 'Không cho phép' })
            }
        } else {
            res.status(401).json({ message: 'Thông tin không hợp lệ' })
        }
    })(req, res, next)
}