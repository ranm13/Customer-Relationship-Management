const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const badges = require('./server/routes/bagdes')
const charts = require('./server/routes/charts')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/crmDB", { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})


app.use('/', api)
app.use('/analytics/badges', badges)
app.use('/analytics/charts', charts)

const port = 1991
app.listen(port, function(){
    console.log('server is running')
})
