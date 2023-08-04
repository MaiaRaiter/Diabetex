import { Router} from 'express';
import AccesoProductoService from '../services/AccesoProductoService.js';

const AccesoProductoRouter = Router();
const accesoProductoService = new AccesoProductoService();

AccesoProductoRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('Estoy en: AccesoProductoController post /', cuerpo);
  
    const accesoProducto = await accesoProductoService.accesoNuevo(cuerpo);
  
    return res.status(201).json(accesoProducto);
});

export default AccesoProductoRouter;