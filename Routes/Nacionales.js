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
    const NacionalesController = require ('../Controllers/NoticiasNacController')

    app.post('/NoticiasNacionales/create', NacionalesController.create) //Esta ruta uliza POST
    app.put('/NoticiasNacionales/update/:id', NacionalesController.update) //Esta ruta utiliza PUT
    app.get('/NoticiasNacionales/getAll', NacionalesController.findAll) //Esta ruta utiliza get
    app.delete('/NoticiasNacionales/deleteOne/:id', NacionalesController.deleteOne) // Esta ruta utiliza delete
}