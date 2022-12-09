const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rootRoute = require('./routes/index')
const connectDB = require('./config/connectDB')
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use(express.json());
connectDB();

app.use('/api', rootRoute)

app.listen(process.env.PORT, () => {
    console.log("ok")
})