import { Router} from 'express';
import CarpetaService from '../services/CarpetaService.js';

const CarpetaRouter = Router();
const carpetaService = new CarpetaService();

CarpetaRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('Estoy en: CarpetaController post /', cuerpo);
  
    const carpeta = await carpetaService.agregarCarpeta(cuerpo);
  
    return res.status(201).json(carpeta);
});

CarpetaRouter.put('', async (req, res) => {
    let cuerpo = req.body;
  
   
    console.log('Estoy en: CarpetaController put /:id');
  
    const carpeta = await carpetaService.update(cuerpo);
  
    return res.status(200).json(carpeta);
});

CarpetaRouter.delete('/:id', async (req, res) => {
    console.log('Estoy en: CarpetaController delete /:id', req.params.id);
  
    const carpeta = await carpetaService.deleteById(req.params.id);
  
    return res.status(200).json(carpeta);
});



export default CarpetaRouter;