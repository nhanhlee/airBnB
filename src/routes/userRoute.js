const express = require('express');
const userRoute = express.Router();

userRoute.get('/hello', (req, res) => {
    res.send("hoi dan it")
})

module.exports = userRoute