import { Router} from 'express';
import EtiquetaService from '../services/EtiquetaService.js';

const EtiquetaRouter = Router();
const etiquetaService = new EtiquetaService();

//Pido a mi bd por el codigo de barra y si no lo encuentra lo pide a la api externa

EtiquetaRouter.get('/:codebar', async (req, res) => {
    console.log('Estoy en: EtiquetaController get /:codebar', req.params.codebar, ' en la API DIABETEX');
    let respuesta;
    
    let etiquetas = await etiquetaService.getEtiquetaDiabetex(req.params.codebar);
  
    console.log('Etiquetas', etiquetas);
  
    if (etiquetas != null){
      console.log('1');
  
      respuesta = res.status(200).json(etiquetas);
  
    } else {
      console.log('No se encontraron las etiqueas del producto en la API DIABETEX');
      console.log('Estoy en: EtiquetaController get /:codebar', req.params.codebar, ' en la API OPEN FOOD FACTS');
  
      let etiquetasExterno = await etiquetaService.getEtiquetas(req.params.codebar);
  
      if (etiquetasExterno.status!=0){
        
        console.log('1');
        let etiquetas = await etiquetaService.getEtiquetaDiabetex(req.params.codebar);     
        respuesta = res.status(200).json(etiquetas);
  
      } else {
  
        console.log('0');
        respuesta = res.status(404).send("No se encontraron las etiquetas");
      }
    }
    return respuesta;
  });

export default EtiquetaRouter;