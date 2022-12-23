const jwt = require('jsonwebtoken')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const Constants = require('./constants')
const db = require('../models/index')
var User = db.User

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer')
options.secretOrKey = Constants.JWTSecret

function passportStrategy() {
  return new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        where: { id: jwtPayload.id }, raw: true
      })
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch (error) {
      done(error, false)
    }
  })
}

module.exports = {
  passportStrategy
}
