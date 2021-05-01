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
    
    const InternacionalesController = require ('../Controllers/NoticiasInController')

    app.post('/NoticiasInternacionales/create', InternacionalesController.create) //Se usa post
    app.put('/NoticiasInternacionales/update/:id', InternacionalesController.update) //Esta ruta utiliza PUT
    app.get('/NoticiasInternacionales/getAll', InternacionalesController.findAll) //Esta ruta utiliza get
    app.delete('/NoticiasInternacionales/deleteOne/:id', InternacionalesController.deleteOne) // Esta ruta utiliza delete
}
