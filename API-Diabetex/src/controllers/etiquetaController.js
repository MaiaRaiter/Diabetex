import { Router} from 'express';
import EtiquetaService from '../services/etiquetaService.js';

const EtiquetaRouter = Router();
const etiquetaService = new EtiquetaService();

//Pido a mi bd por el codigo de barra y si no lo encuentra lo pide a la api externa

EtiquetaRouter.get('/:codebar', async (req, res) => {
    console.log('Estoy en: EtiquetaController get /:codebar', req.params.codebar, ' en la API DIABETEX');
    let respuesta;
    
    let etiquetas = await etiquetaService.getEtiquetaDiabetex(req.params.codebar);
  
    console.log('producto', etiquetas);
  
    if (etiquetas != null){
      console.log('1');
  
      respuesta = res.status(200).json(etiquetas);
  
    } else {
      console.log('No se encontraron las etiqueas del producto en la API DIABETEX');
      console.log('Estoy en: EtiquetaController get /:codebar', req.params.codebar, ' en la API OPEN FOOD FACTS');
  
      let etiquetasExterno = await etiquetaService.getProduct(req.params.codebar);
  
      if (etiquetasExterno.status!=0){
  
        console.log('1');
        respuesta = res.status(200).json(etiquetasExterno);
  
      } else {
  
        console.log('0');
        respuesta = res.status(404).send("No se encontrarin las etiquetas. Seria de mucha ayuda que las agregue");
  
        let cuerpo = req.body;
        console.log('Estoy en: EtiquetaController post /', cuerpo);
  
        const etiquetas = await etiquetaService.agregarProducto(cuerpo);
  
        console.log("Las etiquetas fuerono agregadas");
  
        respuesta = res.status(201).json(etiquetas);
  
      }
    }
    return respuesta;
  });