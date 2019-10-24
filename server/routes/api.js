const express = require('express')
const router = express.Router()
const Client = require('../models/Client')
const data = require('./response.json')

const uploadData = function(){
    for(let c of data){
        let client = new Client(c)
        client.save()
    }
}

uploadData()

router.get('/clients', function(req, res){
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})

router.get('/clientsforactions', function(req, res){
    Client.find({}).exec(function(error, clients){
        let lessClientsData = clients.map(c => {
             return {_id: c._id,
                    name: c.name,
                    owner: c.owner}
        })
        res.send(lessClientsData)
    })
})

router.post('/client', async function(req, res){
    let newClient = new Client(req.body)
    await newClient.save()
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})

router.put('/clients/:id', async function(req, res){
    let clientData = req.body
    let id = req.params.id
    await Client.findByIdAndUpdate(id, clientData)
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})

module.exports = router