const moment = require('moment') 
const express = require('express')
const router = express.Router()
const Client = require('../models/Client')

const getMonthName = function(monthNum){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    
    return monthNames[monthNum-1]
} 

const getLastMonthDates = function(){
    let dates = []
    let today = moment().format()
    let priorDate = moment().subtract('30', 'days').format('MM/DD/YYYY')
    while (moment(priorDate).isBefore(today)) {
        dates.push({date: priorDate, sales: 0})
        priorDate =  moment(priorDate).add('1', 'days').format('MM/DD/YYYY')
    }
    return dates
  }

router.get('/topemployees', function(req, res){
    Client.aggregate().sortByCount('owner').exec(function(err, data){
        res.send(data.slice(0, 3))
      })
})

router.get('/salesby/:filter', function(req, res){
    let filterBy = req.params.filter
    if(filterBy === "firstContact"){
        Client.aggregate([
            {$match: {sold: true}},
            {$group: {_id: {$month: "$firstContact"}, count: { $sum: 1 }}},
            {$sort: {_id: 1}}]).exec(function(err, data){
                data.forEach(i => i._id = getMonthName(i._id))
                res.send(data)
        })
    } else{
        Client.aggregate([
            {$match: {sold: true}}]).sortByCount(filterBy).exec(function(err, data){
                res.send(data)
        })
    }
})

router.get('/lastmonthsales', function(req, res){
    Client.aggregate([
        {$match: {sold: true}},
        {$project:{date: "$firstContact"}}]).exec(function(err, data){
            let today = moment().format()
            let priorDate = moment().subtract('30', 'days').format()
            let dates = getLastMonthDates()
            data.filter(c => moment(c.date).isBetween(priorDate, today))
                .forEach(c => dates.find(d => d.date === moment(c.date).format('MM/DD/YYYY')).sales++)
            res.send(dates)
      })
})

router.get('/salesbyaquisitiondate', function(req, res){
    Client.aggregate([
        {$match: {sold: true}},
        {$project:{date: "$firstContact"}}]).exec(function(err, data){
            let aMonthAgo = moment().subtract('30', 'days').format()
            let sixMonthAgo = moment().subtract('6', 'months').format()
            let aYearAgo = moment().subtract('1', 'years').format()
            let counterByDate = {LastMonth: 0, sixToTwelveMonthsAgo:0, moreThanAYearAgo:0}
            for(let client of data){
                if(moment(client.date).isAfter( aMonthAgo)) counterByDate.LastMonth++  
                else if(moment(client.date).isBetween( aYearAgo, sixMonthAgo)) counterByDate.sixToTwelveMonthsAgo++
                else if(moment(client.date).isBefore( aYearAgo)) counterByDate.moreThanAYearAgo++
            }
            let dataByDate = []
            for(let key in counterByDate){
                dataByDate.push({name:key, sales:counterByDate[key]})
            }
            res.send(dataByDate)
      })
})


module.exports = router