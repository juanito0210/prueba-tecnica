'use strict'

const mongoose = require('mongoose')
const {mongoDB} = require('./data')

mongoose.connect(mongoDB.URI, {

    useNewUrlParser: true,
    useUnifiedTopology : true
})
   .then(db => console.log("database is conect"))
   .catch(err => console.log(`error : ${err}`))