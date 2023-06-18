
import { Router} from 'express';
import ProductoService from '../services/productoService.js';

const ProductoRouter = Router();
const productoService = new ProductoService();

ProductoRouter.get('/:codebar', async (req, res) => {

    let respuesta;

    console.log('Estoy en: ProductoController get /:codebar', req.params.codebar);

    let producto = await productoService.getProduct(req.params.codebar);

    if (producto!=null){

      console.log('1');

      respuesta = res.status(200).json(producto);
    } else {

      console.log('2');

      respuesta = res.status(404).send("No se encontro el producto.");
    }
    
    return respuesta;
    
});



/*

//Pido a mi bd por el codigo de barra y si no lo encuentra lo pide a la api externa

ProductoRouter.get('/:codebar', async (req, res) => {
  console.log('Estoy en: ProductoController get /:codebar', req.params.codebar, ' en la API DIABETEX');
  let respuesta;
  
  const producto = await productoService.getById(req.params.codebar);

  console.log('producto', producto);

  if (producto!=null){
    console.log('1');

    respuesta = res.status(200).json(producto);

  } else {
    console.log('No se encontro el producto en la API DIABETEX');
    console.log('Estoy en: ProductoController get /:codebar', req.params.codebar, ' en la API OPEN FOOD FACTS');

    let productoExterno = await productoService.getProduct(req.params.codebar);

    if (productoExterno!=null){

      console.log('1');
      respuesta = res.status(200).json(productoExterno);

    } else {

      console.log('0');
      respuesta = res.status(404).send("No se encontro el producto. Seria de mucha ayuda que lo agregue");
    }
  }
  return respuesta;
});

ProductoRouter.post('', async (req, res) => {
  let cuerpo = req.body;
  console.log('Estoy en: ProductoController post /', cuerpo);

  const producto = await productoService.insert(cuerpo);

  return res.status(201).json(producto);
});


data: {
    code: '7622210449285',
    status: 0,
    status_verbose: 'product not found'
  }

  data: {
    code: '7622210449285',
    status: 1,
    status_verbose: 'product found'
  }

ProductoRouter.get('/', async (req, res) => {
  console.log('Estoy en: ProductoController get /');
  
  const producto = await productoService.getAll();

  //return res.status(StatusCodes.OK).json(pizzas);
  return res.status(200).json(producto);
});


ProductoRouter.get('/:id', async (req, res) => {
  console.log('Estoy en: ProductoController get /:id', req.params.id);
  let respuesta;
  
  const producto = await productoService.getById(req.params.id);
  console.log('producto', producto);
  if (producto!=null){
    console.log('1');
    respuesta = res.status(200).json(producto);
  } else {
    console.log('2');
    respuesta = res.status(404).send("No se encontro el producto.");
  }

  return respuesta;
});
*/
export default ProductoRouter;