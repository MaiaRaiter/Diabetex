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

AccesoProductoRouter.get('/:id', async (req, res) => {
    
    console.log('Estoy en: AccesoProductoController get /:idUsuario', req.params.id);
  
    const accesoProducto = await accesoProductoService.get5ProductosMasRecientes(req.params.id);
  
    return res.status(201).json(accesoProducto);
});
export default AccesoProductoRouter;