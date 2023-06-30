import { Router} from 'express';
import MeGustaXUsuarioService from '../services/MeGustaXUsuarioService.js';

const MeGustaXUsuarioRouter = Router();
const meGustaXUsuarioService = new MeGustaXUsuarioService();

MeGustaXUsuarioRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('Estoy en: MeGustaXUsuarioController post /', cuerpo);
  
    const meGustaXUsuario = await meGustaXUsuarioService.agregarMeGusta(cuerpo);
    console.log("Se agrego una relacion producto likado - usuario");
    return res.status(201).json(meGustaXUsuario);
    
});

MeGustaXUsuarioRouter.get('/:id', async (req, res) => {

    console.log('Estoy en: MeGustaXUsuarioController get /:idUsuario', req.params.id);
    
    let respuesta;
    
    const meGustaXUsuario = await meGustaXUsuarioService.getProductosMeGustaByIdUsuario(req.params.id);
    
    if (meGustaXUsuario!=null){
      console.log('1');
      respuesta = res.status(200).json(meGustaXUsuario);
    } else {
      console.log('2');
      respuesta = res.status(404).send("No se encontraron los productos que le gustan al ususario id.");
    }
  
    return respuesta;
});

MeGustaXUsuarioRouter.get('/', async (req, res) => {
    console.log('Estoy en: MeGustaXUsuarioController get /');
    
    const meGustaXUsuario = await meGustaXUsuarioService.getTodosProductosMeGusta();
  
    return res.status(200).json(meGustaXUsuario);
});

MeGustaXUsuarioRouter.delete('/:idUsuario/:idProducto', async (req, res) => {
    console.log('Estoy en: MeGustaXUsuarioController delete /:id', req.params.idUsuario, req.params.idProducto );
  
    const meGustaXUsuario = await meGustaXUsuarioService.deleteProductoXUsuarioByIdProducto(req.params.idUsuario, req.params.idProducto);
  
    return res.status(200).json(meGustaXUsuario);
});

  

  

export default MeGustaXUsuarioRouter;