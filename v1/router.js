// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Models
const House = require('./models/House');

mongoose.connect('mongodb://admin:admin@ds121464.mlab.com:21464/real-estate')
    .then(() => console.log('connection to database established...'), (err) => console.log(err));

const db = mongoose.connection;

const router = express.Router();

router.get('/house/rental', (req, res) => {    
    House.find({}, (err, docs) => {
        if(err) throw err;

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.json(docs);
    })    
});
module.exports = router;