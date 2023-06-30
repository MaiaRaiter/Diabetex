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
  
    const carpetaXUsuario = await carpetaXUsuarioService.deleteCarpertaXUsuarioByIdProducto(req.params.idUsuario, req.params.idCarpeta,req.params.idProducto);
  
    return res.status(200).json(carpetaXUsuario);
});

CarpetaXUsuarioRouter.post('', async (req, res) => {
    let cuerpo = req.body;
    console.log('Estoy en: CarpetaXUsuarioService post /', cuerpo);
  
    const carpetaXUsuario = await carpetaXUsuarioService.agregarProductoACarpetaXUsuario(cuerpo);
    console.log("Se agrego una carpeta al ususario.");
    return res.status(201).json(carpetaXUsuario);
    
});

CarpetaXUsuarioRouter.post('/', async (req, res) => {
    let cuerpo = req.body;
    let idCarpeta;
    /*
      "NombreDeCarpeta": "favoritos",
      "IdUsuario":2
    */
    console.log('Estoy en: CarpetaXUsuarioService post /', cuerpo);
    // Averiguar si existe la carpeta }
    //   Si exise obtener el ID
    //    Si no existe crearla y obtener su Id
    // Insertar en CarpetaXProducto idUsuario y el Id de la carpeta obtenida antes
    let carpeta = carpetaService.getByNombre(cuerpo.NombreDeCarpeta);
    if (carpeta!=null){
      //Existe la carpeta
      
    }else{
        let nuevaCarpeta = {Nombre : NombreDeCarpeta};

        carpetaService.insert(nuevaCarpeta);
        carpeta = carpetaService.getByNombre(cuerpo.NombreDeCarpeta);
    }

    idCarpeta = carpeta.Id; // este es el Id nuevo de la carpeta o el existente


    let cuerpoDecXu = { IdUsuario : cuerpo.IdUsuario,
                        IdCarpeta : idCarpeta };

    const carpetaXUsuario = await carpetaXUsuarioService.agregarCarpetaXUsuario(cuerpoDecXu);
    console.log("Se agrego una carpeta al ususario.");
    return res.status(201).json(carpetaXUsuario);
    
});

export default CarpetaXUsuarioRouter;