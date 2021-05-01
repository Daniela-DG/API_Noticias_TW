const express = require ('express')
const bodyParser = require('body-parser')
const {connectToDB} = require ('./db')

const app = express()

app.use(bodyParser.json())
connectToDB()

require('./Routes/Nacionales') (app)
require('./Routes/Internacionales') (app)

app.listen(3000, () =>{
    console.log('La conexion al puerto fue exitosa')
})