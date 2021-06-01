const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {connectToDB} = require ('./db')

const app = express()

app.use(cors())
app.use(bodyParser.json())
connectToDB()

require('./Routes/Nacionales') (app)
require('./Routes/Internacionales') (app)
require('./Routes/Sugerencias')(app)

app.listen(3000, () =>{
    console.log('La conexion al puerto fue exitosa')
})