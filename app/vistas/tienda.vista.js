const { altaProductos } = require('../controlador/controlador.tienda');

module.exports.vistaTienda = async (app) => {
  app.post('/tienda/alta', async (req, res) => {
    let data = req.body;
    try {
      //let resultado = await altaProductos(data);
      let resultado = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion
      }
      res.render('alta', {
        marca: resultado.marca,
        modelo: resultado.modelo,
        descripcion: resultado.descripcion
      })
    } catch (error) {
      res.status(400).render('404', {msj: error.message , titulo: 'Error en la consulta'})
    }
  })
}