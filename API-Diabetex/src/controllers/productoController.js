
import { Router} from 'express';
import ProductoService from '../services/productoService.js';

const ProductoRouter = Router();
const productoService = new ProductoService();



/*ProductoRouter.get('/:codebar', async (req, res) => {
    console.log('Estoy en: ProductoController get /:codebar', req.params.codebar);
    let producto = await productoService.getProduct(req.params.codebar);
    console.log('2');
    
    return producto;
});

/*
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
*/


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

/*
PizzaRouter.post('', async (req, res) => {
  let cuerpo = req.body;
  console.log('Estoy en: pizzaController post /', cuerpo);

  const pizza = await pizzaService.insert(cuerpo);

  return res.status(201).json(pizza);
});

PizzaRouter.put('', async (req, res) => {
  let cuerpo = req.body;

 
  console.log('Estoy en: pizzaController put /:id');

  const pizza = await pizzaService.update(cuerpo);

  return res.status(200).json(pizza);
});

PizzaRouter.delete('/:id', async (req, res) => {
  console.log('Estoy en: pizzaController delete /:id', req.params.id);

  const pizza = await pizzaService.deleteById(req.params.id);

  return res.status(200).json(pizza);
});
*/
export default ProductoRouter;