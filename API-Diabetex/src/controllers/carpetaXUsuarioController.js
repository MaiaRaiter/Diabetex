import { Router} from 'express';
import CarpetaXUsuarioService from '../services/carpetaXUsuarioService.js';
import CarpetaService from '../services/CarpetaService.js';

const CarpetaXUsuarioRouter = Router();
const carpetaXUsuarioService = new CarpetaXUsuarioService();
const carpetaService = new CarpetaService();

CarpetaXUsuarioRouter.get('/:idUsuario', async (req, res) => {

    console.log('Estoy en: CarpetaXUsuarioService get /:idUsuario', req.params.idUsuario);
    
    let respuesta;
    
    const carpetaXUsuario = await carpetaXUsuarioService.getCarpetasByIdUsuario(req.params.idUsuario);
    
    if (carpetaXUsuario!=null){
      console.log('1');
      respuesta = res.status(200).json(carpetaXUsuario);
    } else {
      console.log('2');
      respuesta = res.status(404).send("No se encontraron las carpetas del ususario idUsuario.");
    }
  
    return respuesta;
});

CarpetaXUsuarioRouter.get('/:idUsuario/:idCarpeta', async (req, res) => {

    console.log('Estoy en: CarpetaXUsuarioService get /:idUsuario', req.params.idUsuario, req.params.idCarpeta);
    
    let respuesta;
    
    const carpetaXUsuario = await carpetaXUsuarioService.getProductosDeCarpetasByIdUsuario(req.params.idUsuario, req.params.idCarpeta);
    
    if (carpetaXUsuario!=null){
      console.log('1');
      respuesta = res.status(200).json(carpetaXUsuario);
    } else {
      console.log('2');
      respuesta = res.status(404).send("No se encontraron las carpetas del ususario idUsuario.");
    }
  
    return respuesta;
});

CarpetaXUsuarioRouter.delete('/:idUsuario/:idCarpeta', async (req, res) => {
    console.log('Estoy en: CarpetaXUsuarioService delete /:id', req.params.idUsuario, req.params.idCarpeta );
  
    const carpetaXUsuario = await carpetaXUsuarioService.deleteCarpertaXUsuarioByIdProducto(req.params.idUsuario, req.params.idCarpeta);
  
    return res.status(200).json(carpetaXUsuario);
});

CarpetaXUsuarioRouter.delete('/:idUsuario/:idCarpeta/:idProducto', async (req, res) => {
    console.log('Estoy en: CarpetaXUsuarioService delete /:id', req.params.idUsuario, req.params.idCarpeta,req.params.idProducto);
  
    const carpetaXUsuario = await carpetaXUsuarioService.deleteProductoDeCarpetaByIdUsuario(req.params.idUsuario, req.params.idCarpeta,req.params.idProducto);
  
    return res.status(200).json(carpetaXUsuario);
});

/*
CarpetaXUsuarioRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('2 Estoy en: CarpetaXUsuarioService post /', cuerpo);
  
    const carpetaXUsuario = await carpetaXUsuarioService.agregarProductoACarpetaXUsuario(cuerpo);
    console.log("Se agrego una carpeta al ususario.");
    return res.status(201).json(carpetaXUsuario);
    
});
*/

CarpetaXUsuarioRouter.post('/', async (req, res) => {
    let cuerpo = req.body;
    let respuesta;
 
    console.log('Estoy en: CarpetaXUsuarioService post /', cuerpo);
    
    let carpeta = await carpetaService.getByNombre(cuerpo.NombreDeCarpeta);

    console.log('Estoy en: CarpetaXUsuarioService post /', cuerpo);

    if (carpeta != null){

      respuesta = res.status(201).json("La carpeta ya existe.");

    } else {

      let carpetaNueva = await carpetaService.agregarCarpeta(cuerpo.NombreDeCarpeta);

      if (carpetaNueva > 0) {

        carpeta = await carpetaService.getByNombre(cuerpo.NombreDeCarpeta);

      }
    
      let carpetaXUsuario = await carpetaXUsuarioService.agregarCarpetaXUsuario({
        IdUsuario  : cuerpo.IdUsuario,
        IdCarpetanueva : carpeta.Id
      });

      respuesta = res.status(201).json(carpetaXUsuario);
        
    }

    

    return respuesta;
});

CarpetaXUsuarioRouter.put('/', async (req, res) => {
  let cuerpo = req.body;

  console.log('Estoy en: CarpetaXUsuarioService put');

  console.log(cuerpo);

  let carpeta = await carpetaService.getByNombre(cuerpo.NombreCarpeta);

  const carpetaModificada = await carpetaService.update({
    IdUsuario  : cuerpo.IdUsuario,
    IdCarpeta: carpeta.Id,
    NombreModificado: cuerpo.NombreModificado});

  return res.status(200).json("");
});

export default CarpetaXUsuarioRouter;