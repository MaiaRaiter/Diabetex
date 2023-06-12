import config from './dbconfig.js';
import express from "express";
import cors from "cors";
import ProductoRouter from './src/controllers/productoController.js'

const app = express();
const port = 3000;
  

app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.use("/api/producto", ProductoRouter);

app.listen(port, () => {
    console.log("Escuchando en el " + port );
});