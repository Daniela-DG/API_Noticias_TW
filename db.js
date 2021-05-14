const mongoose = require('mongoose')
const config = require('./config')
const connectToDB = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/NoticiasTW', { useNewUrlParser: true,
     useUnifiedTopology: true }, (error) => {
        if(error){
            console.log('Tenemos un error en la conexion a la DB', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    } )
}

module.exports={connectToDB}
