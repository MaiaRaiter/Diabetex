import config from './dbconfig.js';
import express from "express";
import cors from "cors";
import ProductoRouter from './src/controllers/productoController.js';
import UsuarioRouter from './src/controllers/usuarioController.js';
import MeGustaXUsuarioRouter from './src/controllers/meGusataXUsuarioController.js';
import CarpetaXUsuarioRouter from './src/controllers/carpetaXUsuarioController.js';
import CarpetaRouter from './src/controllers/carpetaController.js';
import EtiquetaRouter from './src/controllers/etiquetaController.js';
import AccesoProductoRouter from './src/controllers/accesoProductoController.js';



const app = express();
const port = 3000;
  
app.use(cors())
app.use(express.json());
app.use(express.static('public'));


app.use("/api/producto", ProductoRouter);
app.use("/api/usuario", UsuarioRouter);
app.use("/api/meGusataXUsuario", MeGustaXUsuarioRouter);
app.use("/api/carpetaXUsuario", CarpetaXUsuarioRouter);
app.use("/api/carpeta", CarpetaRouter);
app.use("/api/etiqueta", EtiquetaRouter);
app.use("/api/accesoProducto", AccesoProductoRouter);

app.listen(port, () => {
    console.log("Escuchando en el " + port );
});