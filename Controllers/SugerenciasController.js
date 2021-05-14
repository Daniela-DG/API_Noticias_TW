/** 
 * C = Create = Crear 
 * R = Reed = Leer 
 * U = Update = Modificar/ Actualizar
 * D = Delete = Eliminar
 */

 const Sugerencias = require('../Models/Sugerencia')

 /**
  * Metodo de creacion de la sugerencia
  * @param {*} req => La informacion que el metodo va a recibir y guardar
  * @param {*} res => La informacion que el usuario va a ver
  */
 exports.create = (req, res) => { 
    console.log('Que tiene el body', req.body)
     const SugerenciaLoc = new Sugerencias({
        Nombre: req.body.Nombre,
        Apellido:req.body.Apellido,
        Sugerencia:req.body.Sugerencia
     })
    SugerenciaLoc.save().then(
        data =>{
            res.send(data)
        }
    ).catch(
        error =>{
            return res.status(500).send({
                message: error.message
            })
        }
    ) 
 }
 /**
 * Metodo de actualizacion de un dato
 * @param {*} req Informacion que el metodo recibe
 * @param {*} res Informacion que da
 */
 exports.update = (req, res) => { 
    console.log('Que tiene el body', req.body)
    const SugerenciaLoc ={
        Nombre: req.body.Nombre,
        Apellido:req.body.Apellido,
        Sugerencia:req.body.Sugerencia
    }
 Sugerencias.findByIdAndUpdate(req.params.id, SugerenciaLoc, { new: true }).then(

        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "error al modificar"
            })
        }
    )
}
/**
 * Metodo para encontrar un dato
 * @param {*} req Informacion que el metodo tiene que buscar
 * @param {*} res Informacion que encuentra
 */

exports.findAll = (req, res) => {
    Sugerencias.find().then(
        SugerenciaLoc => {
            res.send(SugerenciaLoc)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'error al listar las categorias'
            })
        }
    )
}
/**
 * Metodo para borrar los datos
 * @param {*} req  Informacion que va a eliminar 
 * @param {*} res  Notificacion de que se realizo correctamente
 */
 exports.deleteOne = (req, res) => {

    Sugerencias.findByIdAndRemove(req.params.id).then(
        SugerenciaDelete => {
            res.send(SugerenciaDelete)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'no se elimino ninguna sugerencia' + error
            })
        }
    )
}