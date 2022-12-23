const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rootRoute = require('./routes/index')
const connectDB = require('./config/connectDB')
const passport = require('passport')
require('dotenv').config();
const authService = require('./config/passport_jwt')
const path = require("path")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('public', express.static(path.join(__dirname, '/public/uploads')))

app.use(express.json());

connectDB();

app.use(passport.initialize());

passport.use('Bearer', authService.passportStrategy())

app.use('/api', rootRoute)

app.listen(process.env.PORT, () => {
    console.log("Web server is listening on port 8080.")
})