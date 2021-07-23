const Tienda = require('../modelo/tienda.model');

module.exports.altaProductos = async (data) => {
  try {
    let productos = new Tienda(data);
    let resultado = await productos.alta();
    return resultado;
  } catch (error) {
    throw new Error ({error: error.message})
  }
}