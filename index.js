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

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log('La conexion al puerto fue exitosa')
})