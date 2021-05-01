/**
 * C = Create = Crear 
 * R = Reed = Leer 
 * U = Update = Modificar/ Actualizar
 * D = Delete = Eliminar
 */

 const NoticiaInModel = require('../Models/NoticiaInternacional')

 /**
  * Metodo de creacion de las noticias INTERNACIONALES
  * @param {*} req => La informacion que el metodo va a recibir y guardar
  * @param {*} res => La informacion que el usuario va a ver
  */
 exports.create = (req, res) => { 
    console.log('Que tiene el body', req.body)
     const Noticia = new NoticiaInModel({
         NombreNoticia:req.body.NombreNoticia,
         Date:req.body.Date,
         Lugar:req.body.Lugar,
         Resumen:req.body.Resumen,
         Imagen:req.body.Imagen,
         Instruccion:req.body.Instruccion,
         LinkNoticia:req.body.LinkNoticia,
         LinkVideo:req.body.LinkVideo,
         LinkTwiter:req.body.LinkTwiter,
         LinkInstagram:req.body.LinkInstagram,
         LinkFacebook:req.body.LinkFacebook,
     })
    Noticia.save().then(
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
    const Noticia ={
        NombreNoticia:req.body.NombreNoticia,
        Date:req.body.Date,
        Lugar:req.body.lugar,
        Resumen:req.body.Resumen,
        Imagen:req.body.Imagen,
        Instruccion:req.body.Instruccion,
        LinkNoticia:req.body.LinkNoticia,
        LinkVideo:req.body.LinkVideo,
        LinkTwiter:req.body.LinkTwiter,
        LinkInstagram:req.body.LinkInstagram,
        LinkFacebook:req.body.LinkFacebook,
    }
 NoticiaInModel.findByIdAndUpdate(req.params.id, Noticia, { new: true }).then(

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
    NoticiaInModel.find().then(
        Noticias => {
            res.send(Noticias)
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

    NoticiaInModel.findByIdAndRemove(req.params.id).then(
        NoticiasDeleted => {
            res.send(NoticiasDeleted)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'no se elimino ninguna categoria' + error
            })
        }
    )
}