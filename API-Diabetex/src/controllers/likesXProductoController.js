import { Router} from 'express';
import LikesXProducto from '../services/LikesXProductoService.js';

const LikesXProductoRouter = Router();
const likesXProductoService = new LikesXProducto();

LikesXProductoRouter.get('/:codigoBarra', async (req, res) => {

    console.log('Estoy en: ProductoRouter get /:codigoBarra', req.params.codigoBarra);
    
    let respuesta;
    
    const likesXProducto = await likesXProductoService.getProductosMeGustaByCodigoBarraProducto(req.params.codigoBarra);
    
    if (likesXProducto!=null){
      console.log('1');
      respuesta = res.status(200).json(likesXProducto);
    } else {
      console.log('2');
      respuesta = res.status(404).send("Aún no se le ha dado me gusta a este producto");
    }
  
    return respuesta;
});

LikesXProductoRouter.get('/', async (req, res) => {
    console.log('Estoy en: LikesXProductoController get /');
    
    const likesXProducto = await likesXProductoService.get5ProductosMasLikeados();
  
    return res.status(200).json(likesXProducto);
});

export default LikesXProductoRouter;