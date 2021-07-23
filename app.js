//Importo los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

//Middleware globales
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//db modules
const sequelize = require('./app/db/db.conexion')

//vistas
const { vistaTienda } = require ('./app/vistas/tienda.vista.js')

//Levantamos nuestro servidor
async function inicioServer() {
    try {
        //await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();
vistaTienda(app)


