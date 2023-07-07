import { Router} from 'express';
import UsuarioService from '../services/UsuarioService.js';

const UsuarioRouter = Router();
const usuarioService = new UsuarioService();


UsuarioRouter.post('/login', async (req, res) => {
  let entidad = req.body;
  let respuesta;
  let returnEntity;

  returnEntity = await usuarioService.login(entidad);

  if (returnEntity != null){
      returnEntity.Password = '*'.repeat(10);

      respuesta = res.status(200).json(returnEntity);
      
  } else {
    respuesta = res.status(404).send(`Usuario Inexistente`);
  }

  return respuesta;
});




UsuarioRouter.get('/:id', async (req, res) => {

    console.log('Estoy en: UsuarioController get /:id', req.params.id);

    let respuesta;
    
    const usuario = await usuarioService.getByIdUsuario(req.params.id);
    
    if (usuario!=null){
      console.log('1');
      respuesta = res.status(200).json(usuario);
    } else {
      console.log('2');
      respuesta = res.status(404).send("No se encontro la usuario.");
    }
  
    return respuesta;
});

UsuarioRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('Estoy en: UsuarioController post /', cuerpo);
  
    const usuario = await usuarioService.insert(cuerpo);
  
    return res.status(201).json(usuario);
});

UsuarioRouter.put('', async (req, res) => {
    let cuerpo = req.body;
  
   
    console.log('Estoy en: UsuarioController put /:id');
  
    const usuario = await usuarioService.update(cuerpo);
  
    return res.status(200).json(usuario);
});

UsuarioRouter.delete('/:id', async (req, res) => {
    console.log('Estoy en: UsuarioController delete /:id', req.params.id);
  
    const usuario = await usuarioService.deleteProductoXUsuarioByIdProducto(req.params.id);
  
    return res.status(200).json(usuario);
});



export default UsuarioRouter;