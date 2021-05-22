/**
 * Verbos del protocolo HTTP
 * POST: ALmacenamiento de informacion por debajo de cabeceras
 * GET: Obtener informacion  => Trabaja por medio de la url
 * PUT: Se utiliza para modificar la informacion. => Trabaja 
 * por medio de la url respecto a quien se quiere modificar
 * DELETE: Permite eliminar la informacion => Trabaja por medio 
 * de un id por la url
 */

/**
 * 
 * @param {*} app Es express
 */

 module.exports= (app) =>{
    const SugerenciaController = require ('../Controllers/SugerenciasController')

    app.post('/Sugerencias/create', SugerenciaController.create) //Esta ruta uliza POST
    app.put('/Sugerencias/update/:id', SugerenciaController.update) //Esta ruta utiliza PUT
    app.get('/Sugerencias/getAll', SugerenciaController.findAll) //Esta ruta utiliza get
    app.delete('/Sugerencias/deleteOne/:id', SugerenciaController.deleteOne) // Esta ruta utiliza delete
}