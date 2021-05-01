const mongoose = require ('mongoose')

const NoticiaNaSchema = new mongoose.Schema({
    NombreNoticia: {type: String, require: true},
    Date:{type: String, require: true},
    Resumen:{type:String, require:true},
    Imagen: {type: String},
    Instruccion:{type:String, require:true},
    LinkNoticia:{type: String, require:true},
    LinkVideo:{type: String},
    LinkTwiter:{type: String},
    LinkInstagram:{type: String},
    LinkFacebook:{type: String},

})

module.exports=mongoose.model('NoticiaNacional', NoticiaNaSchema)