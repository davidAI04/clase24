const { altaProductos } = require('../controlador/controlador.tienda');

module.exports.vistaTienda = async (app) => {
  app.post('/tienda/alta', async (req, res) => {
    let data = req.body;
    try {
      let resultado = await altaProductos(data);
      res.render('alta', {
        marca: req.body.marca,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion
      })
    } catch (error) {
      res.status(400).render('404', {msj: error.message , titulo: 'Error en la consulta'})
    }
  })
}