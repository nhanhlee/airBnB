const express = require('express');
const authRoute = express.Router();
const db = require('../models/index')

//db.User.findAll()

authRoute.get('/signup', async (req, res) => {
    try {
        res.send("toi roi")
        let data = await db.User.findAll()
        console.log(data)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = authRoute