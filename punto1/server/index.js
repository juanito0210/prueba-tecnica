'use strict'

const express = require('express')
const port = (process.env.PORT || 4000)
const path = require('path')
const cors = require('cors')


//inicializacion
const app = express()
require('./app/config/connection')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json)

//archivos

app.use(express.static(path.join(__dirname, '/app/upload')))

//ruta

app.use('/', require('./app/routes/UploadImage'))

//server

app.listen(port, (err) => {
  if(err){
    console.log(`error: ${err}`)
  }else{
    console.log(`servidor corriendo en el puerto ${port}`)
  }
})