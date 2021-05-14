const mongoose = require ('mongoose')

const SugerenciasSchema = new mongoose.Schema({
    Nombre: {type: String, require: true},
    Apellido:{type: String, require: true},
    Sugerencia:{type:String, require:true}

})

module.exports=mongoose.model('Sugerencia', SugerenciasSchema)