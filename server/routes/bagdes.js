const moment = require('moment') 
const express = require('express')
const router = express.Router()
const Client = require('../models/Client')

isDateInTheCurrentMonth = (date) => {
    let currentDate = new Date()
    let checkedDate = new Date(date)
    return (moment(checkedDate).isSame(currentDate, 'month'))
}

router.get('/hottestcountry', function(req, res){
    Client.aggregate().sortByCount('country').exec(function(err, data){
        res.send(data[0])
      })
})

router.get('/emailssent', function(req, res){
    Client.countDocuments({emailType: {$ne: null}}).exec(function(err, data){
        let counter = {emailsSent: data}
        res.send(counter)
      })
})

router.get('/outstandingclients', function(req, res){
    Client.countDocuments({sold: false}).exec(function(err, data){
        let counter = {outstandingClients: data}
        res.send(counter)
      })
})

router.get('/newmonthclients', function(req, res){
    Client.find({}).exec(function(err, data){
        res.send({count: data.filter(c => isDateInTheCurrentMonth(c.firstContact)).length})
      })
})



module.exports = router
