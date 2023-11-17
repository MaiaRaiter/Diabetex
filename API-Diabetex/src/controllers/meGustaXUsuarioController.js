import { Router} from 'express';
import MeGustaXUsuario from '../services/MeGustaXUsuarioService.js';
import ProductoService from '../services/productoService.js';

const meGustaXUsuarioRouter = Router();
const meGustaXUsuarioService = new MeGustaXUsuario();

const productoService = new ProductoService();

meGustaXUsuarioRouter.post('/:idUsuario/:codebar', async (req, res) => {
  console.log('Estoy en: meGustaXUsuarioController/:idUsuario/:codebar', req.params.idUsuario, req.params.codebar );
  //AGREGA Y ELIMINA EL ME GUSTA

  let producto = await productoService.getProductoDiabetex(req.params.codebar);

  const meGustaXUsuario = await meGustaXUsuarioService.meGusta(req.params.idUsuario, producto);

  return res.status(200).json(meGustaXUsuario);
});

meGustaXUsuarioRouter.get('/:id', async (req, res) => {

  console.log('Estoy en: meGustaXUsuarioController get /:idUsuario', req.params.id);
  
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

meGustaXUsuarioRouter.get('/', async (req, res) => {
    console.log('Estoy en: meGustaXUsuarioController get /');
    
    const meGustaXUsuario = await meGustaXUsuarioService.get5ProductosMasLikeados();
  
    return res.status(200).json(meGustaXUsuario);
});



export default meGustaXUsuarioRouter;