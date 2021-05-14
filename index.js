const express = require ('express')
const bodyParser = require('body-parser')
const {connectToDB} = require ('./db')

const app = express()

// el la clase 1:10 para aplicarlo del dia 11/05 app.use(corse)
app.use(bodyParser.json())
connectToDB()

require('./Routes/Nacionales') (app)
require('./Routes/Internacionales') (app)
require('./Routes/Sugerencia')

app.listen(3000, () =>{
    console.log('La conexion al puerto fue exitosa')
})