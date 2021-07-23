const sequelize = require('../db/db.conexion')

module.exports = class Tienda {
  constructor(producto) {
    this.nuevoProducto = producto;
  }

  async alta() {
    try {
      let producto = [
        this.nuevoProducto.marca,
        this.nuevoProducto.modelo,
        this.nuevoProducto.descripcion
      ];

      let resultado = await sequelize.query('INSERT INTO tienda_productos (marca, modelo, descripcion) VALUES (?, ?, ?)', { replacements: producto, type: sequelize.QueryTypes.SELECT })
      console.log(resultado);
      return resultado
    } catch (error) {
      throw new Error ({message: error.message})
    }
  }
}